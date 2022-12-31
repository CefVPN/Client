#include "include/cef_v8.h"


namespace client 
{
    class Cefvpn_v8Handler : public CefV8Handler
    {
        public:
        Cefvpn_v8Handler();

        virtual bool Execute(const CefString& name,
                             CefRefPtr<CefV8Value> object,
                             const CefV8ValueList& arguments,
                             CefRefPtr<CefV8Value>& retval,
                             CefString& exception) override;

        void ExecuteFunction(const CefString &name, CefRefPtr<CefBrowser> browser, CefRefPtr<CefListValue> argsList, int value);

        void ReleaseCallbacks(CefRefPtr<CefV8Context> context);

        private:
        typedef std::map<std::pair<std::string, int>,
            std::pair<CefRefPtr<CefV8Context>, CefRefPtr<CefV8Value> > >
                CallbackMap;
        CallbackMap callback_map_;

        IMPLEMENT_REFCOUNTING(Cefvpn_v8Handler);
    };
} // namespace client
