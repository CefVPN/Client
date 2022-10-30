#include "tests/shared/renderer/client_app_functions.h"
#include <shellapi.h>
#include <thread>
#include <iostream>

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
            CefRefPtr<CefProcessMessage> msg = CefProcessMessage::Create("str_cr");
            retval = CefV8Value::CreateString("Button Clicked!");

            CefRefPtr<CefV8Context> context = CefV8Context::GetCurrentContext();
            context->GetBrowser()->GetMainFrame()->SendProcessMessage(PID_BROWSER, msg);

            return true;
        }

    return false;
    };
}