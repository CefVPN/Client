#include "cefvpn.hpp"
#include <iostream>

#include <openvpn/client/clievent.hpp>
#include <openvpn/time/timestr.hpp>

#include <shellapi.h>

std::string cefvpn::ovpn::state;

using namespace openvpn;

class Client : public ClientAPI::OpenVPNClient
{
private:
  virtual void event(const ClientAPI::Event &ev) override
  {

    std::cout << ev.info;

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

  virtual void log(const ClientAPI::LogInfo &info) override
  {
    std::cout << "[" << date_time() << "] " << info.text << std::flush;
  }

  virtual void external_pki_cert_request(ClientAPI::ExternalPKICertRequest &certreq) override {}

  virtual void external_pki_sign_request(ClientAPI::ExternalPKISignRequest &signcert) override {}

  virtual bool pause_on_connection_timeout() override { return false; }
};

static Client *the_client = nullptr; // GLOBAL
std::string cefvpn::ovpn::content = "NULL";
cefvpn::ovpn::~ovpn() {}

static CefRefPtr<CefBrowser> cef_browser;

void cefvpn::ovpn::ImportProfile(std::string content, CefRefPtr<CefBrowser> browser) {

  ClientAPI::Config config;

  if(!content.empty()) {
    config.content = content;
    EvalConfigInfo(config, browser);
  }
}

void cefvpn::ovpn::EvalConfigInfo(ClientAPI::Config config, CefRefPtr<CefBrowser> browser) {

  Client client;

  the_client = &client;
  ClientAPI::EvalConfig ev_config = client.eval_config(config);

  CefRefPtr<CefProcessMessage> configEvalInfo = CefProcessMessage::Create("CEvalInfo");
  CefRefPtr<CefListValue> configEvalArgs = configEvalInfo->GetArgumentList();
  
  configEvalArgs->SetString(0, ev_config.profileName);

  browser->GetMainFrame()->SendProcessMessage(PID_RENDERER, configEvalInfo);
}

void cefvpn::ovpn::connect()
{
  using namespace openvpn::ClientAPI;

  ClientAPI::Config config;

  MergeConfig mc;

  OpenVPNClientHelper ovpn_helper;

  mc = ovpn_helper.merge_config("C:/Users/skill/Desktop/ovpn-profiles/OP-p0ison.ovpn", true);

  // cefvpn::ovpn o_vpn;

  config.content = cefvpn::ovpn::content; //
  if (cefvpn::ovpn::content != "NULL")
    std::cout << cefvpn::ovpn::content;

  config.dco = false;
  config.allowLocalDnsResolvers = false;


 // ClientAPI::EvalConfig ev_config = client.eval_config(config);

  ProvideCreds creds;

  creds.username = "vpnbook";
  creds.password = "3ev7r8m";
  creds.cachePassword = 1;
  creds.replacePasswordWithSessionID = 1;

 // client.provide_creds(creds);

  if (cefvpn::ovpn::content != "NULL")
  {
    ClientAPI::Status status = the_client->connect();
  }
  else
  {
    std::cout << "Please Import Profile First...\n";
  }
}

void cefvpn::ovpn::disconnect()
{
  the_client->stop();
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