#include "cefvpn.hpp"
#include <iostream>

#include <openvpn/client/clievent.hpp>

using namespace openvpn;

class Client : public ClientAPI::OpenVPNClient
{
private:

    virtual void event(const ClientAPI::Event& ev) override {

    }

    virtual void log(const ClientAPI::LogInfo& info) override {
        std::cout << info.text;
    }

    virtual void external_pki_cert_request(ClientAPI::ExternalPKICertRequest& certreq) override {

    }

    virtual void external_pki_sign_request(ClientAPI::ExternalPKISignRequest& signcert) override {

    }

    virtual bool pause_on_connection_timeout() override {
        return false;
    }

};

static Client* the_client = nullptr;


void cefvpn::ovpn::connect()
{
    using namespace openvpn::ClientAPI;

    ClientAPI::Config config;

    MergeConfig mc;

    OpenVPNClientHelper ovpn_helper;

    mc = ovpn_helper.merge_config("C:/Users/skill/Desktop/OPstriker.ovpn", true);

    config.content = mc.profileContent;

    Client client;

    the_client = &client;

    ClientAPI::EvalConfig ev_config = client.eval_config(config);

    ClientAPI::Status status = client.connect();
}

void cefvpn::ovpn::disconnect()
{
    the_client->stop();
}
