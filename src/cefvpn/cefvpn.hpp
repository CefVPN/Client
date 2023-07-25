#pragma once
#include "include/cef_browser.h"
#include "include/cef_process_message.h"
#include "include/cef_client.h"

#include "ovpncli.hpp"
namespace cefvpn
{
  using namespace openvpn;
  class Client : public ClientAPI::OpenVPNClient
  {
  public:
    virtual void event(const ClientAPI::Event& ev) override;
    virtual void log(const ClientAPI::LogInfo& info) override;
    virtual void external_pki_cert_request(ClientAPI::ExternalPKICertRequest& certreq) override;
    virtual void external_pki_sign_request(ClientAPI::ExternalPKISignRequest& signcert) override;
    virtual bool pause_on_connection_timeout() override;

  private:
    static cefvpn::Client *the_client;
  };
  class ovpn
  {
  public:
    static void connect();
    static void disconnect();
    static bool isConnected;
    static bool isConnecting;
    static bool isProfileImported;

    static std::string state;

    static std::string content;

    static void NotifyConnectState(CefRefPtr<CefBrowser> browser);
    static void UpdateConnectState(std::string state);
    static void ImportProfile(std::string content, CefRefPtr<CefBrowser> browser);
    static void EvalConfigInfo(openvpn::ClientAPI::Config config, CefRefPtr<CefBrowser> browser);

    virtual ~ovpn();

    private:
  };
  class OS
  {
  public:
    static bool Shell_Notify(std::wstring title, std::wstring message);
  };
}