#pragma once
#include "ovpncli.hpp"
#include "include/cef_browser.h"
#include "include/cef_process_message.h"
#include "include/cef_client.h"

namespace cefvpn
{
  class ovpn
  {
  public:
    static void connect();
    static void disconnect();
    static bool isConnected;
    static bool isConnecting;

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