#include <string>
#include <algorithm>
#include <windows.h>

#include "include/cef_app.h"
#include "include/cef_browser.h"
#include "app.hpp"
#include "handler.hpp"

CefVHandler *g_handler = 0;

RECT rect;
HWND exg_hwnd;

LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
	switch (uMsg) {
	   case WM_DESTROY:
	   	CefQuitMessageLoop();
	   	PostQuitMessage(0);
	   	return 0;
      case WM_CREATE: {
           RECT rcClient;

           GetWindowRect(hwnd, &rcClient);

           rect = rcClient;

           SetWindowPos(hwnd,
               NULL,
               rcClient.left, rcClient.top,
               rcClient.right - rcClient.left, rcClient.bottom - rcClient.top,
               SWP_FRAMECHANGED);
           return 0;
           break;
      }
      case WM_SIZE: {
         	if (g_handler) {
	   		// Resize the browser window and address bar to match
	   		//  the new frame
	   		// window size
	   		GetClientRect(hwnd, &rect);
	   		HDWP hdwp = BeginDeferWindowPos(1);
	   		hdwp = DeferWindowPos(hdwp, g_handler->GetBrowserHwnd(),
	   		                      NULL, rect.left, rect.top,
	   		                      rect.right - rect.left,
	   		                      rect.bottom - rect.top,
	   		                      SWP_FRAMECHANGED);
	   		EndDeferWindowPos(hdwp);
	   	}
	   	break;
      }
      case WM_NCCALCSIZE: {
           if (!wParam) return DefWindowProc(hwnd, uMsg, wParam, lParam);
           UINT dpi = GetDpiForWindow(hwnd);

           int frame_x = GetSystemMetricsForDpi(SM_CXFRAME, dpi);
           int frame_y = GetSystemMetricsForDpi(SM_CYFRAME, dpi);
           int padding = GetSystemMetricsForDpi(SM_CXPADDEDBORDER, dpi);

           NCCALCSIZE_PARAMS* params = (NCCALCSIZE_PARAMS*)lParam;
           RECT* requested_client_rect = params->rgrc;

           requested_client_rect->right -= frame_x + padding;
           requested_client_rect->left += frame_x + padding;
           requested_client_rect->bottom -= frame_y + padding - 1;

           return 0;
           break;
      }
	   case WM_ERASEBKGND:
	   	if (g_handler) {
	   		// Dont erase the background if the browser window has
	   		//  been loaded
	   		// (this avoids flashing)
	   		return 0;
	   	}

	   	break;

      case WM_GETMINMAXINFO: {
         LPMINMAXINFO lpMMI = (LPMINMAXINFO)lParam;
         lpMMI->ptMinTrackSize.x = 850;
         lpMMI->ptMinTrackSize.y = 550;
         break;
      }
	   case WM_PAINT:
	   	PAINTSTRUCT ps;
	   	HDC hdc = BeginPaint(hwnd, &ps);
	   	EndPaint(hwnd, &ps);
	   	return 0;
	   }
	return DefWindowProc(hwnd, uMsg, wParam, lParam);
}

HWND RegisterWindow(HINSTANCE hInstance, int nCmdShow)
{
	WNDCLASS wc = {};

	wc.lpfnWndProc   = WindowProc;
	wc.hInstance     = hInstance;
	wc.lpszClassName = L"CefVPN";
	RegisterClass(&wc);
	HWND hwnd = CreateWindowEx(WS_EX_APPWINDOW,                                 // Optional
	                                                              //  window
	                                                              //  styles.
	                           wc.lpszClassName, // Window class
	                           L"CefVPN", // Window text
	                           WS_OVERLAPPEDWINDOW, // Window
	                                                                  //  style
	                           // Size and position
	                           CW_USEDEFAULT, CW_USEDEFAULT, 
                              850, 550,
	                           NULL, // Parent window
	                           NULL, // Menu
	                           hInstance, // Instance handle
	                           NULL // Additional application data
	                           );

	if (hwnd == NULL) {
		return 0;
	}

	ShowWindow(hwnd, nCmdShow);
	return hwnd;
}

LRESULT CALLBACK MessageWndProc(HWND hWnd, UINT message, WPARAM wParam,
                                LPARAM lParam)
{
	return DefWindowProc(hWnd, message, wParam, lParam);
}

HWND CreateMessageWindow(HINSTANCE hInstance)
{
	WNDCLASSEX wc = {
		0
	};

	wc.cbSize        = sizeof(wc);
	wc.lpfnWndProc   = MessageWndProc;
	wc.hInstance     = hInstance;
	wc.lpszClassName = L"CefVPN_msgWnd";
	RegisterClassEx(&wc);

	return CreateWindow(wc.lpszClassName, 0, 0, 0, 0, 0, 0, HWND_MESSAGE, 0, hInstance, 0);
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE, LPSTR, int nCmdShow)
{


   CefEnableHighDPISupport();

	CefMainArgs main_args(hInstance);

	CefRefPtr<CefVApp> app(new CefVApp);

	// Execute the secondary process, if any.
	int exit_code = CefExecuteProcess(main_args, app.get(), NULL);

	if (exit_code >= 0) {
		exit(exit_code);
	}

	// Register the window class.
	HWND hwnd = RegisterWindow(hInstance, nCmdShow);
	if (hwnd == 0) {
		return 0;
	}

	RECT rect;
	GetClientRect(hwnd, &rect);

	CefSettings settings;
	CefInitialize(main_args, settings, app.get(), NULL);
	CefWindowInfo info;
	CefBrowserSettings b_settings;
	CefRefPtr<CefVHandler> client(new CefVHandler(false));
	g_handler = (CefVHandler*) client.get();
	std::string path = "http://localhost:3000";
	CefRefPtr<CefCommandLine> command_line =
		CefCommandLine::GetGlobalCommandLine();

	info.SetAsChild(hwnd, CefRect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top));
	CefBrowserHost::CreateBrowser(info,
	                              client.get(), path, b_settings, nullptr,
	                              nullptr);
	int result = 0;

	if (!settings.multi_threaded_message_loop) {
		// Run the CEF message loop. This function will block until the
		//  application
		// recieves a WM_QUIT message.
		CefRunMessageLoop();
	} else {
		// Create a hidden window for message processing.
		HWND hMessageWnd = CreateMessageWindow(hInstance);
		MSG msg;

		// Run the application message loop.
		while (GetMessage(&msg, NULL, 0, 0)) {
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}

		DestroyWindow(hMessageWnd);
		hMessageWnd = NULL;
		result      = static_cast<int>(msg.wParam);
	}

	CefShutdown();
	return result;
}
