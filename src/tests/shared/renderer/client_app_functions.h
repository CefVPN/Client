#include "include/cef_v8.h"

namespace client 
{
    class Cefvpn_v8Handler : public CefV8Handler
    {
        public:
        Cefvpn_v8Handler() {}

        virtual bool Execute(const CefString& name,
                             CefRefPtr<CefV8Value> object,
                             const CefV8ValueList& arguments,
                             CefRefPtr<CefV8Value>& retval,
                             CefString& exception) override;

        IMPLEMENT_REFCOUNTING(Cefvpn_v8Handler);
    };
} // namespace client
