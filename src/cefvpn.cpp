#include "cefvpn.hpp"
#include <iostream>

#include <openvpn/client/clievent.hpp>
#include <openvpn/time/timestr.hpp>

std::string cefvpn::ovpn::state;

using namespace openvpn;

class Client : public ClientAPI::OpenVPNClient
{
private:
    virtual void event(const ClientAPI::Event &ev) override
    {

        cefvpn::ovpn::isConnected = ev.name == "CONNECTED" ? true : false;

        if(ev.name != "CONNECTED" && ev.name != "DISCONNECTED") {
            cefvpn::ovpn::isConnecting = 1;
        } else 
            cefvpn::ovpn::isConnecting = 0;

        cefvpn::ovpn::UpdateConnectState(ev.name);

    }

    virtual void log(const ClientAPI::LogInfo &info) override
    {
       // std::cout << "[" << date_time() << "] " << info.text << std::flush;
    }

    virtual void external_pki_cert_request(ClientAPI::ExternalPKICertRequest &certreq) override
    {
    }

    virtual void external_pki_sign_request(ClientAPI::ExternalPKISignRequest &signcert) override
    {
    }

    virtual bool pause_on_connection_timeout() override
    {
        return false;
    }
};

static Client *the_client = nullptr;

cefvpn::ovpn::~ovpn() {}

void cefvpn::ovpn::connect()
{
    using namespace openvpn::ClientAPI;

    ClientAPI::Config config;

    MergeConfig mc;

    OpenVPNClientHelper ovpn_helper;

    mc = ovpn_helper.merge_config("C:/Users/skill/Desktop/OP-v0iden.ovpn", true);

    config.content = mc.profileContent;
    config.dco = false;

    Client client;

    the_client = &client;

    ClientAPI::EvalConfig ev_config = client.eval_config(config);

    ClientAPI::Status status = client.connect(); 
}

void cefvpn::ovpn::disconnect()
{

    the_client->stop();
}

static CefRefPtr<CefBrowser> cef_browser;

void cefvpn::ovpn::NotifyConnectState(CefRefPtr<CefBrowser> browser) {
    cef_browser = browser;
}

void cefvpn::ovpn::UpdateConnectState(std::string state) {

    std::string VPN_STATE = "CEFVPN:STATE:" + state;

    CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(VPN_STATE);

    cef_browser->GetMainFrame()->SendProcessMessage(PID_RENDERER, msg);

    std::cout << VPN_STATE << std::endl;

}