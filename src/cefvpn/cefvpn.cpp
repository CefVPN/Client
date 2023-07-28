#include "cefvpn.hpp"
#include <iostream>

#include <openvpn/client/clievent.hpp>
#include <openvpn/time/timestr.hpp>
#include <memory>

#include <shellapi.h>

std::string cefvpn::ovpn::state;

using namespace openvpn;

void cefvpn::Client::event(const ClientAPI::Event &ev)
{
  std::cout << ev.info;
  //std::cout << ev.name + "\n";

  cefvpn::ovpn::isConnected = ev.name == "CONNECTED" ? true : false;

  if (cefvpn::ovpn::isConnected)
  {
    cefvpn::OS::Shell_Notify(L"CefVPN Client", L"CONNECTED!");
  }

  if (ev.name != "CONNECTED" && ev.name != "DISCONNECTED")
  {
    cefvpn::ovpn::isConnecting = 1;
  }
  else
    cefvpn::ovpn::isConnecting = 0;

  cefvpn::ovpn::UpdateConnectState(ev.name);
}

void cefvpn::Client::log(const ClientAPI::LogInfo& info) {
  std::cout << "[" << date_time() << "] " << info.text << std::flush;
}

void cefvpn::Client::external_pki_cert_request(ClientAPI::ExternalPKICertRequest& certreq) {}

void cefvpn::Client::external_pki_sign_request(ClientAPI::ExternalPKISignRequest& signcert) {}

bool cefvpn::Client::pause_on_connection_timeout() { return false; }

 // GLOBAL
//cefvpn::Client *the_client;
std::unique_ptr<cefvpn::Client> the_client;

std::string cefvpn::ovpn::content = "NULL";
bool cefvpn::ovpn::isProfileImported = false;
cefvpn::ovpn::~ovpn() {}

static CefRefPtr<CefBrowser> cef_browser;

void cefvpn::ovpn::ImportProfile(std::string content, CefRefPtr<CefBrowser> browser)
{
 //
 the_client = std::make_unique<Client>();
 //the_client = new Client();

  ClientAPI::Config config;
  config.dco = false;


  if (!content.empty())
  {
    cefvpn::ovpn::content = content;
    config.content = content;
    EvalConfigInfo(config, browser);
  }
}

void reEvalConfig(std::string profileContent) {
  the_client = std::make_unique<cefvpn::Client>();

  ClientAPI::Config config;
  config.dco = false;
  config.content = profileContent;

  the_client->eval_config(config);
}

void cefvpn::ovpn::EvalConfigInfo(ClientAPI::Config config, CefRefPtr<CefBrowser> browser)
{
  
  ClientAPI::EvalConfig ev_config = the_client->eval_config(config);

  if(!ev_config.error) {
    cefvpn::ovpn::isProfileImported = true;
  }

  CefRefPtr<CefProcessMessage> configEvalInfo = CefProcessMessage::Create("CEvalInfo");
  CefRefPtr<CefListValue> configEvalArgs = configEvalInfo->GetArgumentList();

  configEvalArgs->SetString(0, ev_config.profileName);

  browser->GetMainFrame()->SendProcessMessage(PID_RENDERER, configEvalInfo);
}

void cefvpn::ovpn::connect()
{
  if(isProfileImported) {
    reEvalConfig(cefvpn::ovpn::content);
    ClientAPI::Status status = the_client->connect();
  } else {
    std::cout << "Please Import Profile Before Connecting to VPN...\n";
  }
}

void cefvpn::ovpn::disconnect()
{
  if(isProfileImported) {
    the_client->stop();
  }
}

void cefvpn::ovpn::NotifyConnectState(CefRefPtr<CefBrowser> browser)
{
  cef_browser = browser;
}

void cefvpn::ovpn::UpdateConnectState(std::string state)
{

  std::string VPN_STATE = "CEFVPN:STATE:" + state;

  CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(VPN_STATE);

  cef_browser->GetMainFrame()->SendProcessMessage(PID_RENDERER, msg);

  // std::cout << VPN_STATE << std::endl;
}

bool cefvpn::OS::Shell_Notify(std::wstring title, std::wstring message)
{

  // Display a low ink balloon message. This is a warning, so show the appropriate system icon.
  NOTIFYICONDATAW nid = {};
  nid.cbSize = sizeof(NOTIFYICONDATA);
  nid.uID = 0;
  nid.uFlags = NIF_INFO;
  nid.dwInfoFlags = NIIF_INFO;
  nid.uTimeout = 1000; // 1 second timeout
  wcscpy_s(nid.szInfoTitle, L"CefVPN Status:");
  wcscpy_s(nid.szInfo, L"CONNECTED!");
  return Shell_NotifyIcon(NIM_ADD, &nid);
}