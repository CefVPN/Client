#include "tests/shared/renderer/client_app_functions.h"
#include <thread>
#include <iostream>

#if defined(OS_WIN)
#include <shellapi.h>
#endif

namespace client {
    bool Cefvpn_v8Handler::Execute(
            const CefString& name,
            CefRefPtr<CefV8Value> object,
            const CefV8ValueList& arguments,
            CefRefPtr<CefV8Value>& retval,
            CefString& exception
        ) {

        if(name == "str_cr")
        {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);

            return true;
        } else if(name == "dis_cr") {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        } else if(name == "min_wnd") {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        } else if(name == "max_wnd") {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        } else if(name == "hide_wnd") {
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create(name);

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);
        }

    return false;
    };
}