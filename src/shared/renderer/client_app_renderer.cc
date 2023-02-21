// Copyright (c) 2013 The Chromium Embedded Framework Authors. All rights
// reserved. Use of this source code is governed by a BSD-style license that
// can be found in the LICENSE file.

#include "shared/renderer/client_app_renderer.h"

#include "include/base/cef_logging.h"

namespace client {

ClientAppRenderer::ClientAppRenderer() {
  CreateDelegates(delegates_);
}

void ClientAppRenderer::OnWebKitInitialized() {
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnWebKitInitialized(this);



}

void ClientAppRenderer::OnBrowserCreated(
    CefRefPtr<CefBrowser> browser,
    CefRefPtr<CefDictionaryValue> extra_info) {
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnBrowserCreated(this, browser, extra_info);

}

void ClientAppRenderer::OnBrowserDestroyed(CefRefPtr<CefBrowser> browser) {
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnBrowserDestroyed(this, browser);
}

CefRefPtr<CefLoadHandler> ClientAppRenderer::GetLoadHandler() {
  CefRefPtr<CefLoadHandler> load_handler;
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end() && !load_handler.get(); ++it)
    load_handler = (*it)->GetLoadHandler(this);

  return load_handler;
}

void ClientAppRenderer::OnContextCreated(CefRefPtr<CefBrowser> browser,
                                         CefRefPtr<CefFrame> frame,
                                         CefRefPtr<CefV8Context> context) 
{

  CefRefPtr<CefV8Value> object = context->GetGlobal();

  _cefV8Handler = new Cefvpn_v8Handler();

  object->SetValue("str_cr", CefV8Value::CreateFunction("str_cr", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE);

  object->SetValue("dis_cr", CefV8Value::CreateFunction("dis_cr", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE);

  object->SetValue("min_wnd", CefV8Value::CreateFunction("min_wnd", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE);

  object->SetValue("max_wnd", CefV8Value::CreateFunction("max_wnd", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE);

  object->SetValue("hide_wnd", CefV8Value::CreateFunction("hide_wnd", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE);

  object->SetValue("OnSnapLayouts", CefV8Value::CreateFunction("OnSnapLayouts", _cefV8Handler), V8_PROPERTY_ATTRIBUTE_NONE); 

  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnContextCreated(this, browser, frame, context);
}

void ClientAppRenderer::OnContextReleased(CefRefPtr<CefBrowser> browser,
                                          CefRefPtr<CefFrame> frame,
                                          CefRefPtr<CefV8Context> context) {

  //Cefvpn_v8Handler* cefvpn_v8;

  //cefvpn_v8->ReleaseCallbacks(context);

  _cefV8Handler->ReleaseCallbacks(context);

  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnContextReleased(this, browser, frame, context);
}

void ClientAppRenderer::OnUncaughtException(
    CefRefPtr<CefBrowser> browser,
    CefRefPtr<CefFrame> frame,
    CefRefPtr<CefV8Context> context,
    CefRefPtr<CefV8Exception> exception,
    CefRefPtr<CefV8StackTrace> stackTrace) {
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it) {
    (*it)->OnUncaughtException(this, browser, frame, context, exception,
                               stackTrace);
  }
}

void ClientAppRenderer::OnFocusedNodeChanged(CefRefPtr<CefBrowser> browser,
                                             CefRefPtr<CefFrame> frame,
                                             CefRefPtr<CefDOMNode> node) {
  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end(); ++it)
    (*it)->OnFocusedNodeChanged(this, browser, frame, node);
}

bool ClientAppRenderer::OnProcessMessageReceived(
    CefRefPtr<CefBrowser> browser,
    CefRefPtr<CefFrame> frame,
    CefProcessId source_process,
    CefRefPtr<CefProcessMessage> message) {
  DCHECK_EQ(source_process, PID_BROWSER);
 
  bool handled = false;

  CefRefPtr<CefV8Context> v8context = browser->GetMainFrame()->GetV8Context();

  if(message->GetName() == "CONNECT:STAT") {
    CefRefPtr<CefListValue> ig_args = message->GetArgumentList();

    bool connected = ig_args->GetString(0) == "STATUS:CONNECTED" ? true : false;

    if(connected) {
      //frame->ExecuteJavaScript("alert('SUCESS!: VPN CONNECTED!!!')", frame->GetURL(), 0);
      handled = true;
    }
  } else if(message->GetName() == "CEFVPN:STATE:CONNECTED") {

    //Cefvpn_v8Handler* cefvpn_v8;

    //cefvpn_v8->ExecuteFunction(message->GetName(), browser, nullptr, 0);

    _cefV8Handler->ExecuteFunction(message->GetName(), browser, nullptr, 0);

  }

  DelegateSet::iterator it = delegates_.begin();
  for (; it != delegates_.end() && !handled; ++it) {
    handled = (*it)->OnProcessMessageReceived(this, browser, frame,
                                              source_process, message);
  }

  return handled;
}

}  // namespace client
