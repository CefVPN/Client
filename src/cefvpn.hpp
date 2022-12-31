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

        static void NotifyConnectState(CefRefPtr<CefBrowser> browser);
        static void UpdateConnectState(std::string state);

        virtual ~ovpn();
    };
}