#include "shared/renderer/client_app_functions.h"
#include <thread>
#include <iostream>

#if defined(OS_WIN)
#include <shellapi.h>
#endif

namespace client
{

    Cefvpn_v8Handler::Cefvpn_v8Handler(){};

    bool Cefvpn_v8Handler::Execute(
        const CefString &name,
        CefRefPtr<CefV8Value> object,
        const CefV8ValueList &arguments,
        CefRefPtr<CefV8Value> &retval,
        CefString &exception)
    {

        CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();

        if (name == "str_cr")
        {

            if (arguments.size() == 2 && arguments[1]->IsFunction())
            {

                CefRefPtr<CefV8Context> v8_context = CefV8Context::GetCurrentContext();
                int browser_id = v8_context->GetBrowser()->GetMainFrame()->GetIdentifier();
                std::string message_name = arguments[0]->GetStringValue();

                callback_map_.insert(
                    std::make_pair(
                        std::make_pair(message_name, browser_id),
                        std::make_pair(v8_context, arguments[1])));

                CefV8ValueList args;

                args.push_back(CefV8Value::CreateBool(true));

                // call_back_fn->ExecuteFunction(nullptr, args);

                CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);
                context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
            }
        }
        else if (name == "dis_cr")
        {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        }
        else if (name == "min_wnd")
        {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        }
        else if (name == "max_wnd")
        {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        }
        else if (name == "hide_wnd")
        {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        }
        else if (name == "OnSnapLayouts")
        {
            if (arguments[0]->IsBool())
            {
                bool arg = arguments[0]->GetBoolValue();

                CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(arg ? "OnSnapLayouts:1" : "OnSnapLayouts:0");

                context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
            }
        }
        return false;
    };

    void Cefvpn_v8Handler::ExecuteFunction(
        const CefString &name, CefRefPtr<CefBrowser> browser, CefRefPtr<CefListValue> argsList, int value)
    {
        if (name == "CEFVPN:STATE:CONNECTED")
        {
            if (!callback_map_.empty())
            {
                CallbackMap::const_iterator it = callback_map_.find(
                    std::make_pair("update", browser->GetMainFrame()->GetIdentifier()));

                if (it != callback_map_.end())
                {

                    CefRefPtr<CefV8Context> context = it->second.first;
                    CefRefPtr<CefV8Value> value = it->second.second;

                    context->Enter();

                    CefV8ValueList args;

                    args.push_back(CefV8Value::CreateBool(false));

                    value->ExecuteFunction(nullptr, args);

                    context->Exit();
                }
            }
        }
    }

    void Cefvpn_v8Handler::ReleaseCallbacks(CefRefPtr<CefV8Context> context)
    {
        if (!callback_map_.empty())
        {
            CallbackMap::iterator it = callback_map_.begin();
            for (; it != callback_map_.end();)
            {
                if (it->second.first->IsSame(context))
                {
                    callback_map_.erase(it++);
                }
                else
                {
                    ++it;
                }
            }
        }
    }

}