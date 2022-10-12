cmake_minimum_required(VERSION 3.15)
project (CefVPN)

set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreadedDebug")

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
    src/tests/cefclient/browser/client_handler_osr.cc
    src/tests/cefclient/browser/client_handler_osr.h
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
    src/tests/cefclient/browser/osr_dragdrop_events.h 
    src/tests/cefclient/browser/osr_renderer.h 
    src/tests/cefclient/browser/osr_renderer.cc 
    src/tests/cefclient/browser/osr_renderer_settings.h 
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
    src/tests/cefclient/browser/browser_window_osr_win.cc
    src/tests/cefclient/browser/browser_window_osr_win.h
    src/tests/cefclient/browser/browser_window_std_win.cc
    src/tests/cefclient/browser/browser_window_std_win.h
    src/tests/cefclient/browser/main_context_impl_win.cc
    src/tests/cefclient/browser/main_message_loop_multithreaded_win.cc
    src/tests/cefclient/browser/main_message_loop_multithreaded_win.h
    src/tests/cefclient/browser/osr_accessibility_helper.cc 
    src/tests/cefclient/browser/osr_accessibility_helper.h 
    src/tests/cefclient/browser/osr_accessibility_node.cc 
    src/tests/cefclient/browser/osr_accessibility_node.h 
    src/tests/cefclient/browser/osr_accessibility_node_win.cc 
    src/tests/cefclient/browser/osr_dragdrop_win.cc 
    src/tests/cefclient/browser/osr_dragdrop_win.h 
    src/tests/cefclient/browser/osr_ime_handler_win.cc 
    src/tests/cefclient/browser/osr_ime_handler_win.h 
    src/tests/cefclient/browser/osr_d3d11_win.cc 
    src/tests/cefclient/browser/osr_d3d11_win.h 
    src/tests/cefclient/browser/osr_render_handler_win.cc 
    src/tests/cefclient/browser/osr_render_handler_win.h 
    src/tests/cefclient/browser/osr_render_handler_win_d3d11.cc 
    src/tests/cefclient/browser/osr_render_handler_win_d3d11.h 
    src/tests/cefclient/browser/osr_render_handler_win_gl.cc 
    src/tests/cefclient/browser/osr_render_handler_win_gl.h 
    src/tests/cefclient/browser/osr_window_win.cc 
    src/tests/cefclient/browser/osr_window_win.h 
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

set(VCPKG_PATH ${PROJECT_SOURCE_DIR}/vcpkg_installed/${VCPKG_TARGET_TRIPLET})

#VCPKG
find_package(asio CONFIG REQUIRED)
find_package(lz4 CONFIG REQUIRED)
find_package(OpenSSL REQUIRED)
find_package(jsoncpp CONFIG REQUIRED)
find_path(TAP_WINDOWS6_INCLUDE_DIRS "tap-windows.h")

set(OPENVPN3_SRCS
    src/ovpncli.hpp
    src/ovpncli.cpp
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
)

target_link_libraries(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}/lib/libcef.lib
    ${PROJECT_SOURCE_DIR}/lib/libcef_dll_wrapper.lib
    ${PROJECT_SOURCE_DIR}/lib/cef_sandbox.lib
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

add_custom_command(
    TARGET ${PROJECT_NAME}
    POST_BUILD
    COMMAND "mt.exe" -nologo
            -manifest \"${CMAKE_CURRENT_SOURCE_DIR}/${PROJECT_NAME}.exe.manifest\" \"${CMAKE_CURRENT_SOURCE_DIR}/compatibility.manifest\"
            -outputresource:"${CMAKE_CURRENT_SOURCE_DIR}/build/Debug/${PROJECT_NAME}.exe"\;\#1
    COMMENT "Adding manifest..."
)



