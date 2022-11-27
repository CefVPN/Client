cmake_minimum_required(VERSION 3.5)
project (CefVPN)

#set(CMAKE_CXX_FLAGS_RELEASE "/MT")
set(CMAKE_CXX_FLAGS_DEBUG "/MTd")

# Set CEF Version
set(CEF_BIN_VERSION "cef_binary_107.1.11+g26c0b5e+chromium-107.0.5304.110")

# Cmake Modules.
set(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)
set(CEF_ROOT ${PROJECT_SOURCE_DIR})
include("FindCEF")

#Source Files...
set(CEFCLIENT_BROWSER_SRCS
    # shared_sources_browser
    src/tests/shared/browser/client_app_browser.cc 
    src/tests/shared/browser/client_app_browser.h 
    src/tests/shared/browser/extension_util.cc 
    src/tests/shared/browser/extension_util.h 
    src/tests/shared/browser/file_util.cc 
    src/tests/shared/browser/file_util.h 
    src/tests/shared/browser/geometry_util.cc 
    src/tests/shared/browser/geometry_util.h 
    src/tests/shared/browser/main_message_loop.cc 
    src/tests/shared/browser/main_message_loop.h 
    src/tests/shared/browser/main_message_loop_external_pump.cc 
    src/tests/shared/browser/main_message_loop_external_pump.h 
    src/tests/shared/browser/main_message_loop_std.cc 
    src/tests/shared/browser/main_message_loop_std.h 
    src/tests/shared/browser/resource_util.h 
    # cefclient_sources_browser
    src/tests/cefclient/browser/binding_test.cc
    src/tests/cefclient/browser/binding_test.h
    src/tests/cefclient/browser/browser_window.cc
    src/tests/cefclient/browser/browser_window.h
    src/tests/cefclient/browser/bytes_write_handler.cc
    src/tests/cefclient/browser/bytes_write_handler.h
    src/tests/cefclient/browser/client_app_delegates_browser.cc
    src/tests/cefclient/browser/client_browser.cc
    src/tests/cefclient/browser/client_browser.h
    src/tests/cefclient/browser/client_handler.cc
    src/tests/cefclient/browser/client_handler.h
    src/tests/cefclient/browser/client_handler_std.cc
    src/tests/cefclient/browser/client_handler_std.h
    src/tests/cefclient/browser/client_types.h
    src/tests/cefclient/browser/dialog_test.cc
    src/tests/cefclient/browser/dialog_test.h
    src/tests/cefclient/browser/image_cache.cc
    src/tests/cefclient/browser/image_cache.h
    src/tests/cefclient/browser/main_context.cc
    src/tests/cefclient/browser/main_context.h
    src/tests/cefclient/browser/main_context_impl.cc
    src/tests/cefclient/browser/main_context_impl.h
    src/tests/cefclient/browser/media_router_test.cc
    src/tests/cefclient/browser/media_router_test.h
    src/tests/cefclient/browser/preferences_test.cc
    src/tests/cefclient/browser/preferences_test.h
    src/tests/cefclient/browser/resource.h
    src/tests/cefclient/browser/response_filter_test.cc
    src/tests/cefclient/browser/response_filter_test.h
    src/tests/cefclient/browser/root_window.cc
    src/tests/cefclient/browser/root_window.h
    src/tests/cefclient/browser/root_window_create.cc
    src/tests/cefclient/browser/root_window_manager.cc
    src/tests/cefclient/browser/root_window_manager.h
    src/tests/cefclient/browser/root_window_views.cc
    src/tests/cefclient/browser/root_window_views.h
    src/tests/cefclient/browser/scheme_test.cc
    src/tests/cefclient/browser/scheme_test.h
    src/tests/cefclient/browser/server_test.cc
    src/tests/cefclient/browser/server_test.h
    src/tests/cefclient/browser/temp_window.h
    src/tests/cefclient/browser/test_runner.cc
    src/tests/cefclient/browser/test_runner.h
    src/tests/cefclient/browser/urlrequest_test.cc
    src/tests/cefclient/browser/urlrequest_test.h
    src/tests/cefclient/browser/views_menu_bar.cc
    src/tests/cefclient/browser/views_menu_bar.h
    src/tests/cefclient/browser/views_overlay_controls.cc
    src/tests/cefclient/browser/views_overlay_controls.h
    src/tests/cefclient/browser/views_style.cc
    src/tests/cefclient/browser/views_style.h
    src/tests/cefclient/browser/views_window.cc
    src/tests/cefclient/browser/views_window.h
    src/tests/cefclient/browser/window_test.cc
    src/tests/cefclient/browser/window_test.h
    src/tests/cefclient/browser/window_test_runner.cc
    src/tests/cefclient/browser/window_test_runner.h
    src/tests/cefclient/browser/window_test_runner_views.cc
    src/tests/cefclient/browser/window_test_runner_views.h
)

set(CEFCLIENT_COMMON_SRCS
    # shared_sources_common
    src/tests/shared/common/binary_value_utils.cc
    src/tests/shared/common/binary_value_utils.h
    src/tests/shared/common/client_app.cc
    src/tests/shared/common/client_app.h
    src/tests/shared/common/client_app_other.cc
    src/tests/shared/common/client_app_other.h
    src/tests/shared/common/client_switches.cc
    src/tests/shared/common/client_switches.h
    src/tests/shared/common/string_util.cc
    src/tests/shared/common/string_util.h
    # cefclient_sources_common
    src/tests/cefclient/common/client_app_delegates_common.cc
    src/tests/cefclient/common/scheme_test_common.cc
    src/tests/cefclient/common/scheme_test_common.h
)

set(CEFCLIENT_RENDERER_SRCS
    # shared_sources_renderer
    src/tests/shared/renderer/client_app_renderer.cc
    src/tests/shared/renderer/client_app_renderer.h
    src/tests/shared/renderer/client_app_functions.cc
    src/tests/shared/renderer/client_app_functions.h
    # cefclient_sources_renderer
    src/tests/cefclient/renderer/client_app_delegates_renderer.cc
    src/tests/cefclient/renderer/client_renderer.cc
    src/tests/cefclient/renderer/client_renderer.h
    src/tests/cefclient/renderer/ipc_performance_test.cc
    src/tests/cefclient/renderer/ipc_performance_test.h
    src/tests/cefclient/renderer/performance_test.cc
    src/tests/cefclient/renderer/performance_test.h
    src/tests/cefclient/renderer/performance_test_setup.h
    src/tests/cefclient/renderer/performance_test_tests.cc
)

set(CEFCLIENT_WINDOWS_SRCS
    # shared_sources_win
    src/tests/shared/browser/main_message_loop_external_pump_win.cc
    src/tests/shared/browser/resource_util_win.cc
    src/tests/shared/browser/util_win.cc
    src/tests/shared/browser/util_win.h
    # cefclient_sources_win
    src/tests/cefclient/browser/browser_window_std_win.cc
    src/tests/cefclient/browser/browser_window_std_win.h
    src/tests/cefclient/browser/main_context_impl_win.cc
    src/tests/cefclient/browser/main_message_loop_multithreaded_win.cc
    src/tests/cefclient/browser/main_message_loop_multithreaded_win.h
    src/tests/cefclient/browser/resource_util_win_idmap.cc
    src/tests/cefclient/browser/root_window_win.cc
    src/tests/cefclient/browser/root_window_win.h
    src/tests/cefclient/browser/temp_window_win.cc
    src/tests/cefclient/browser/temp_window_win.h
    src/tests/cefclient/browser/window_test_runner_win.cc
    src/tests/cefclient/browser/window_test_runner_win.h
    src/cefclient_win.cc
    src/tests/cefclient/resources/win/cefclient.rc
)

# Cef Config

set(CEF_VERSION_OS_ARCH ${CEF_BIN_VERSION}_windows64)
set(CEF_ROOT ${PROJECT_SOURCE_DIR}/third_party/cef-project/)
set(CEF_BIN_ROOT ${CEF_ROOT}/third_party/cef/${CEF_VERSION_OS_ARCH})
set(CEF_LIBCEF_DLL_LIB ${CEF_ROOT}/build/libcef_dll_wrapper)

#VCPKG
set(VCPKG_PATH ${PROJECT_SOURCE_DIR}/bin/vcpkg_installed/${VCPKG_TARGET_TRIPLET})

find_package(asio CONFIG REQUIRED)
find_package(lz4 CONFIG REQUIRED)
find_package(OpenSSL REQUIRED)
find_package(jsoncpp CONFIG REQUIRED)
find_path(TAP_WINDOWS6_INCLUDE_DIRS "tap-windows.h")

set(OPENVPN3_SRCS
    src/ovpncli.hpp
    src/ovpncli.cpp
    src/cefvpn.hpp
    src/cefvpn.cpp
)

set(CEFCLIENT_SRCS
    ${CEFCLIENT_BROWSER_SRCS}
    ${CEFCLIENT_COMMON_SRCS}
    ${CEFCLIENT_RENDERER_SRCS}
    ${CEFCLIENT_WINDOWS_SRCS}
    ${OPENVPN3_SRCS}
)

set(SRC_FILES
    src/cefclient_win.cc
    ${CEFCLIENT_SRCS}
)

set(OPENVPN3_DEFINES
    -DTAP_WIN_COMPONENT_ID=tap0901
    -DASIO_STANDALONE
    -DUSE_ASIO
    -DUSE_OPENSSL
    -DHAVE_LZ4
    -DOPENVPN_COMMAND_AGENT
    -DHAVE_JSONCPP
    -DLZ4_DISABLE_DEPRECATE_WARNINGS
    -DMBEDTLS_DEPRECATED_REMOVED
    -D_CRT_SECURE_NO_WARNINGS
    -DASIO_DISABLE_LOCAL_SOCKETS
    -DOVPNAGENT_DISABLE_PATH_CHECK
    -DENABLE_OVPNDCOWIN
)

set(WINDOWS_DEFS
    -DWIN32
    -D_WINDOWS
    -D__STDC_CONSTANT_MACROS
    -D__STDC_FORMAT_MACROS
    -D_WIN32
    -DUNICODE
    -D_UNICODE
    -DWINVER=0x0A00
    -D_WIN32_WINNT=0x0A00
    -DNOMINMAX
    -DWIN32_LEAN_AND_MEAN
    -D_HAS_EXCEPTIONS=0
    -DPSAPI_VERSION=1
    -D_HAS_ITERATOR_DEBUGGING=0
)

set(CEF_DEFS
    -DCEF_USE_SANDBOX
    -DCEF_USE_ATL   
    -DOS_POSIX
)

set(OPENVPN3_DEP_LIBS
    Iphlpapi.lib
    Wininet.lib
    Rpcrt4.lib
    Wtsapi32.lib
    Fwpuclnt.lib
)

set(CEF_DEP_LIBS

)

add_definitions(
    -DCMAKE_INTDIR="Debug"
    ${WINDOWS_DEFS}
    ${CEF_DEFS}
    ${OPENVPN3_DEFINES}
    -DVCPKG_MANIFEST_INSTALL=ON
)

add_executable(${PROJECT_NAME} WIN32 ${SRC_FILES} ${CEFCLIENT_SRCS})

target_include_directories(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}/include/cef/
    ${PROJECT_SOURCE_DIR}/include/
    ${PROJECT_SOURCE_DIR}/include/src/
    ${PROJECT_SOURCE_DIR}/src/
    ${VCPKG_PATH}/include/
)

target_link_libraries(${PROJECT_NAME} PUBLIC
    ${CEF_BIN_ROOT}/Debug/libcef.lib
    ${CEF_LIBCEF_DLL_LIB}/Debug/libcef_dll_wrapper.lib
    ${CEF_BIN_ROOT}/Debug/cef_sandbox.lib
    Ws2_32.lib
    Dbghelp.lib
    Shlwapi.lib
    Version.lib
    Setupapi.lib
    Propsys.lib
    Powrprof.lib
    Winmm.lib
    delayimp.lib
    Opengl32.lib
    Oleacc.lib
    Imm32.lib
    D3D11.lib
    Shell32.lib
    Dwmapi.lib
    ${OPENVPN3_DEP_LIBS}
)

# VCPKG libs...
target_link_libraries(
    ${PROJECT_NAME} PRIVATE
    asio
    asio::asio
    lz4::lz4
    OpenSSL::SSL
    jsoncpp_object 
    jsoncpp_static 
)
target_compile_options(${PROJECT_NAME} PRIVATE "/bigobj")

target_include_directories(
    ${PROJECT_NAME} PRIVATE 
    ${TAP_WINDOWS6_INCLUDE_DIRS}
)

if(OS_WINDOWS)
    add_custom_command(
        TARGET ${PROJECT_NAME}
        POST_BUILD
        COMMAND "mt.exe" -nologo
                -manifest \"${CMAKE_CURRENT_SOURCE_DIR}/${PROJECT_NAME}.exe.manifest\" \"${CMAKE_CURRENT_SOURCE_DIR}/compatibility.manifest\"
                -outputresource:"${CMAKE_CURRENT_SOURCE_DIR}/bin/Debug/${PROJECT_NAME}.exe"\;\#1
        COMMENT "Adding manifest..."
    )
    COPY_FILES("${PROJECT_NAME}" "${CEF_BINARY_FILES}" "${CEF_BIN_ROOT}/Debug" "${PROJECT_SOURCE_DIR}/bin/Debug")
    COPY_FILES("${PROJECT_NAME}" "${CEF_RESOURCE_FILES}" "${CEF_BIN_ROOT}/Resources" "${PROJECT_SOURCE_DIR}/bin/Debug")
endif()