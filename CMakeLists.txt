cmake_minimum_required(VERSION 3.5)
project (CefVPN)

# Set CEF Version
set(CEF_BIN_VERSION "cef_binary_112.3.0+gb09c4ca+chromium-112.0.5615.165")

# Cmake Modules.
set(CMAKE_MODULE_PATH ${PROJECT_SOURCE_DIR}/cmake)
set(CEF_ROOT ${PROJECT_SOURCE_DIR})
include("FindCEF")

if (CMAKE_BUILD_TYPE STREQUAL "Debug")
    set(CONFIG "Debug")
    set(COMPILE_DEF -D_NDEBUG)
else()
    set(CONFIG "Release")
    set(COMPILE_DEF -DNDEBUG)
endif()

#Source Files...
set(CEFCLIENT_BROWSER_SRCS
    # shared_sources_browser
    src/shared/browser/client_app_browser.cc 
    src/shared/browser/client_app_browser.h 
    src/shared/browser/extension_util.cc 
    src/shared/browser/extension_util.h 
    src/shared/browser/file_util.cc 
    src/shared/browser/file_util.h 
    src/shared/browser/geometry_util.cc 
    src/shared/browser/geometry_util.h 
    src/shared/browser/main_message_loop.cc 
    src/shared/browser/main_message_loop.h 
    src/shared/browser/main_message_loop_external_pump.cc 
    src/shared/browser/main_message_loop_external_pump.h 
    src/shared/browser/main_message_loop_std.cc 
    src/shared/browser/main_message_loop_std.h 
    src/shared/browser/resource_util.h 
    # cefclient_sources_browser
    src/cefclient/browser/binding_test.cc
    src/cefclient/browser/binding_test.h
    src/cefclient/browser/browser_window.cc
    src/cefclient/browser/browser_window.h
    src/cefclient/browser/bytes_write_handler.cc
    src/cefclient/browser/bytes_write_handler.h
    src/cefclient/browser/client_app_delegates_browser.cc
    src/cefclient/browser/client_browser.cc
    src/cefclient/browser/client_browser.h
    src/cefclient/browser/client_handler.cc
    src/cefclient/browser/client_handler.h
    src/cefclient/browser/client_handler_std.cc
    src/cefclient/browser/client_handler_std.h
    src/cefclient/browser/client_types.h
    src/cefclient/browser/dialog_test.cc
    src/cefclient/browser/dialog_test.h
    src/cefclient/browser/image_cache.cc
    src/cefclient/browser/image_cache.h
    src/cefclient/browser/main_context.cc
    src/cefclient/browser/main_context.h
    src/cefclient/browser/main_context_impl.cc
    src/cefclient/browser/main_context_impl.h
    src/cefclient/browser/media_router_test.cc
    src/cefclient/browser/media_router_test.h
    src/cefclient/browser/preferences_test.cc
    src/cefclient/browser/preferences_test.h
    src/cefclient/browser/resource.h
    src/cefclient/browser/response_filter_test.cc
    src/cefclient/browser/response_filter_test.h
    src/cefclient/browser/root_window.cc
    src/cefclient/browser/root_window.h
    src/cefclient/browser/root_window_create.cc
    src/cefclient/browser/root_window_manager.cc
    src/cefclient/browser/root_window_manager.h
    src/cefclient/browser/root_window_views.cc
    src/cefclient/browser/root_window_views.h
    src/cefclient/browser/scheme_test.cc
    src/cefclient/browser/scheme_test.h
    src/cefclient/browser/server_test.cc
    src/cefclient/browser/server_test.h
    src/cefclient/browser/temp_window.h
    src/cefclient/browser/test_runner.cc
    src/cefclient/browser/test_runner.h
    src/cefclient/browser/urlrequest_test.cc
    src/cefclient/browser/urlrequest_test.h
    src/cefclient/browser/views_menu_bar.cc
    src/cefclient/browser/views_menu_bar.h
    src/cefclient/browser/views_overlay_controls.cc
    src/cefclient/browser/views_overlay_controls.h
    src/cefclient/browser/views_style.cc
    src/cefclient/browser/views_style.h
    src/cefclient/browser/views_window.cc
    src/cefclient/browser/views_window.h
    src/cefclient/browser/window_test.cc
    src/cefclient/browser/window_test.h
    src/cefclient/browser/window_test_runner.cc
    src/cefclient/browser/window_test_runner.h
    src/cefclient/browser/window_test_runner_views.cc
    src/cefclient/browser/window_test_runner_views.h
)

set(CEFCLIENT_COMMON_SRCS
    # shared_sources_common
    src/shared/common/binary_value_utils.cc
    src/shared/common/binary_value_utils.h
    src/shared/common/client_app.cc
    src/shared/common/client_app.h
    src/shared/common/client_app_other.cc
    src/shared/common/client_app_other.h
    src/shared/common/client_switches.cc
    src/shared/common/client_switches.h
    src/shared/common/string_util.cc
    src/shared/common/string_util.h
    # cefclient_sources_common
    src/cefclient/common/client_app_delegates_common.cc
    src/cefclient/common/scheme_test_common.cc
    src/cefclient/common/scheme_test_common.h
)

set(CEFCLIENT_RENDERER_SRCS
    # shared_sources_renderer
    src/shared/renderer/client_app_renderer.cc
    src/shared/renderer/client_app_renderer.h
    src/shared/renderer/client_app_functions.cc
    src/shared/renderer/client_app_functions.h
    # cefclient_sources_renderer
    src/cefclient/renderer/client_app_delegates_renderer.cc
    src/cefclient/renderer/client_renderer.cc
    src/cefclient/renderer/client_renderer.h
    src/cefclient/renderer/ipc_performance_test.cc
    src/cefclient/renderer/ipc_performance_test.h
    src/cefclient/renderer/performance_test.cc
    src/cefclient/renderer/performance_test.h
    src/cefclient/renderer/performance_test_setup.h
    src/cefclient/renderer/performance_test_tests.cc
)

set(CEFCLIENT_WINDOWS_SRCS
    # shared_sources_win
    src/shared/browser/main_message_loop_external_pump_win.cc
    src/shared/browser/resource_util_win.cc
    src/shared/browser/util_win.cc
    src/shared/browser/util_win.h
    # cefclient_sources_win
    src/cefclient/browser/browser_window_std_win.cc
    src/cefclient/browser/browser_window_std_win.h
    src/cefclient/browser/main_context_impl_win.cc
    src/cefclient/browser/main_message_loop_multithreaded_win.cc
    src/cefclient/browser/main_message_loop_multithreaded_win.h
    src/cefclient/browser/resource_util_win_idmap.cc
    src/cefclient/browser/root_window_win.cc
    src/cefclient/browser/root_window_win.h
    src/cefclient/browser/temp_window_win.cc
    src/cefclient/browser/temp_window_win.h
    src/cefclient/browser/window_test_runner_win.cc
    src/cefclient/browser/window_test_runner_win.h
    src/cefclient/resources/win/cefclient.rc
)

set(CEFCLIENT_LINUX_SRCS
    #CEFCLIENT_LINUX_SHARED_BROWSER_SRCS
    src/shared/browser/main_message_loop_external_pump_linux.cc
    src/shared/browser/resource_util_posix.cc
    #CEFCLIENT_LINUX_BROWSER_SRCS
    src/cefclient/browser/browser_window_std_gtk.cc
    src/cefclient/browser/browser_window_std_gtk.h
    src/cefclient/browser/dialog_handler_gtk.cc
    src/cefclient/browser/dialog_handler_gtk.h
    src/cefclient/browser/main_context_impl_posix.cc
    src/cefclient/browser/main_message_loop_multithreaded_gtk.cc
    src/cefclient/browser/main_message_loop_multithreaded_gtk.h
    src/cefclient/browser/print_handler_gtk.cc
    src/cefclient/browser/print_handler_gtk.h
    src/cefclient/browser/resource_util_linux.cc
    src/cefclient/browser/root_window_gtk.cc
    src/cefclient/browser/root_window_gtk.h
    src/cefclient/browser/temp_window_x11.cc
    src/cefclient/browser/temp_window_x11.h
    src/cefclient/browser/util_gtk.cc
    src/cefclient/browser/util_gtk.h
    src/cefclient/browser/window_test_runner_gtk.cc
    src/cefclient/browser/window_test_runner_gtk.h
    src/CefVPN/cefclient_gtk.cc
)

set(CEFCLIENT_RESOURCES_SRCS
    #CEFCLIENT_RESOURCES_RESOURCES_SRCS
    src/cefclient/resources/binding.html
    src/cefclient/resources/dialogs.html
    src/cefclient/resources/draggable.html
    src/cefclient/resources/splash.html
    src/cefclient/resources/ipc_performance.html
    src/cefclient/resources/localstorage.html
    src/cefclient/resources/logo.png
    src/cefclient/resources/CefVPN.png
    src/cefclient/resources/media_router.html
    src/cefclient/resources/menu_icon.1x.png
    src/cefclient/resources/menu_icon.2x.png
    src/cefclient/resources/other_tests.html
    src/cefclient/resources/performance.html
    src/cefclient/resources/performance2.html
    src/cefclient/resources/preferences.html
    src/cefclient/resources/response_filter.html
    src/cefclient/resources/server.html
    src/cefclient/resources/transparency.html
    src/cefclient/resources/urlrequest.html
    src/cefclient/resources/websocket.html
    src/cefclient/resources/window.html
    src/cefclient/resources/xmlhttprequest.html
    #CEFCLIENT_RESOURCES_RESOURCES_EXTENSIONS_SET_PAGE_COLOR_SRCS
    src/cefclient/resources/extensions/set_page_color/README.md
    src/cefclient/resources/extensions/set_page_color/icon.png
    src/cefclient/resources/extensions/set_page_color/manifest.json
    src/cefclient/resources/extensions/set_page_color/popup.html
    src/cefclient/resources/extensions/set_page_color/popup.js
    #CEFCLIENT_RESOURCES_SHARED_RESOURCES_SRCS
    src/shared/resources/osr_test.html
    src/shared/resources/pdf.html
    src/shared/resources/pdf.pdf
    src/shared/resources/window_icon.1x.png
    src/shared/resources/window_icon.2x.png
)

# Cef Config
if(OS_WINDOWS)
    set(CEF_VERSION_OS_ARCH ${CEF_BIN_VERSION}_windows64)
elseif(OS_LINUX)
    set(CEF_VERSION_OS_ARCH ${CEF_BIN_VERSION}_linux64)
endif()

set(CEF_ROOT ${PROJECT_SOURCE_DIR}/third_party/cef-project/)
set(CEF_BIN_ROOT ${CEF_ROOT}/third_party/cef/${CEF_VERSION_OS_ARCH})
set(CEF_LIBCEF_DLL_LIB ${CEF_ROOT}/build/libcef_dll_wrapper)

#VCPKG
set(VCPKG_PATH ${PROJECT_SOURCE_DIR}/bin/vcpkg_installed/${VCPKG_TARGET_TRIPLET})

set(OPENVPN3_SRCS
    src/cefvpn/ovpncli.hpp
    src/cefvpn/ovpncli.cpp
    src/cefvpn/cefvpn.hpp
    src/cefvpn/cefvpn.cpp
)

set(SQLCipher_SRC
    src/cefvpn/db/creds.hpp
    src/cefvpn/db/creds.cpp
)

set(CEFCLIENT_SRCS
    ${CEFCLIENT_BROWSER_SRCS}
    ${CEFCLIENT_COMMON_SRCS}
    ${CEFCLIENT_RENDERER_SRCS}
    ${CEFCLIENT_WINDOWS_SRCS}
    ${OPENVPN3_SRCS}
    #${SQLCipher_SRC}
)


set(WIN_SRC_FILES
    src/cefvpn/cefclient_win.cc
    src/cefvpn/cef_helper.h
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

set(SQLCipher_DEFS
    -DSQLITE_HAS_CODEC
)

set(CEF_DEFS
    -DCEF_USE_SANDBOX
    -DCEF_USE_ATL   
    -DOS_POSIX
    ${COMPILE_DEF}
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

if(OS_LINUX)
    # All sources required by the "cefclient" target. Generates an executable that
    # is used for all processes.
    set(CEFCLIENT_SRCS
        ${CEFCLIENT_BROWSER_SRCS}
        ${CEFCLIENT_COMMON_SRCS}
        ${CEFCLIENT_RENDERER_SRCS}
        ${CEFCLIENT_RESOURCES_SRCS}
        ${CEFCLIENT_LINUX_SRCS}
        ${CEFCLIENT_RESOURCES_SRCS}
    )

    # Find required libraries and update compiler/linker variables.
    FIND_LINUX_LIBRARIES("gmodule-2.0 gtk+-3.0 gthread-2.0 gtk+-unix-print-3.0 xi")

    add_definitions(
      -D__STDC_CONSTANT_MACROS
      -D__STDC_FORMAT_MACROS
      -D_FILE_OFFSET_BITS=64
      -DCEF_USE_SANDBOX
    )

    # Executable target.
    add_executable(${PROJECT_NAME} ${CEFCLIENT_SRCS})

    target_include_directories(${PROJECT_NAME} PUBLIC
        ${PROJECT_SOURCE_DIR}/include/cef/
        ${PROJECT_SOURCE_DIR}/include/
        ${PROJECT_SOURCE_DIR}/include/src/
        ${PROJECT_SOURCE_DIR}/src/
    )

    SET_EXECUTABLE_TARGET_PROPERTIES(${PROJECT_NAME})
    target_link_libraries(${PROJECT_NAME} 
        ${CEF_BIN_ROOT}/${CONFIG}/libcef.so
        ${CEF_LIBCEF_DLL_LIB}/libcef_dll_wrapper.a
        "GL" 
        ${CEF_STANDARD_LIBS}
    )

    # Set rpath so that libraries can be placed next to the executable.
    set_target_properties(${PROJECT_NAME} PROPERTIES INSTALL_RPATH "$ORIGIN")
    set_target_properties(${PROJECT_NAME} PROPERTIES BUILD_WITH_INSTALL_RPATH TRUE)
    set_target_properties(${PROJECT_NAME} PROPERTIES RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/bin/${CONFIG})

    # We don't call deprecated GTK functions, and they can cause build failures, so disable them.
    add_definitions("-DGTK_DISABLE_DEPRECATED")

    # Copy CEF binary and resource files to the target output directory.
    COPY_FILES("${PROJECT_NAME}" "${CEF_BINARY_FILES}" "${CEF_BIN_ROOT}/${CONFIG}" "${PROJECT_SOURCE_DIR}/bin/${CONFIG}")
    COPY_FILES("${PROJECT_NAME}" "${CEF_RESOURCE_FILES}" "${CEF_BIN_ROOT}/Resources" "${PROJECT_SOURCE_DIR}/bin/${CONFIG}")

    # Copy cefclient resource files to the target output directory.
    COPY_FILES("${PROJECT_NAME}" "${CEFCLIENT_RESOURCES_SRCS}" "${CMAKE_CURRENT_SOURCE_DIR}" "${PROJECT_SOURCE_DIR}/bin/${CONFIG}/cefclient_files")

    # Set SUID permissions on the chrome-sandbox target.
    SET_LINUX_SUID_PERMISSIONS("${PROJECT_NAME}" "${PROJECT_SOURCE_DIR}/bin/${Debug}/chrome-sandbox")
endif()


if(OS_WINDOWS)

    set(CMAKE_CXX_FLAGS_RELEASE "/MT")
    set(CMAKE_CXX_FLAGS_DEBUG "/MTd")

    #vcpkg
    find_package(asio CONFIG REQUIRED)
    find_package(lz4 CONFIG REQUIRED)
    find_package(OpenSSL REQUIRED)
    find_package(jsoncpp CONFIG REQUIRED)
    find_path(TAP_WINDOWS6_INCLUDE_DIRS "tap-windows.h")

    add_definitions(
        ${WINDOWS_DEFS}
        ${CEF_DEFS}
        ${OPENVPN3_DEFINES}
        ${SQLCipher_DEFS}
        -DVCPKG_MANIFEST_INSTALL=ON
    )

    add_executable(${PROJECT_NAME} ${WIN_SRC_FILES} ${CEFCLIENT_SRCS})

    target_include_directories(${PROJECT_NAME} PUBLIC
        ${PROJECT_SOURCE_DIR}/include/cef/
        ${PROJECT_SOURCE_DIR}/include/
        ${PROJECT_SOURCE_DIR}/include/src/
        ${PROJECT_SOURCE_DIR}/src/
        ${VCPKG_PATH}/include/
    )


    target_link_libraries(${PROJECT_NAME} PUBLIC
        ${CEF_BIN_ROOT}/${CONFIG}/libcef.lib
        ${CEF_LIBCEF_DLL_LIB}/${CONFIG}/libcef_dll_wrapper.lib
        ${CEF_BIN_ROOT}/${CONFIG}/cef_sandbox.lib
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
        Userenv.lib
        Shcore.lib
        ntdll.lib
        runtimeobject.lib
        ${OPENVPN3_DEP_LIBS}
    )

    # Link SQLCipher
    target_link_libraries(
        ${PROJECT_NAME} PRIVATE
        ${PROJECT_SOURCE_DIR}/third_party/sqlcipher/lib/sqlite3.lib
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

    add_custom_command(
        TARGET ${PROJECT_NAME}
        POST_BUILD
        COMMAND "mt.exe" -nologo
                -manifest \"${CMAKE_CURRENT_SOURCE_DIR}/${PROJECT_NAME}.exe.manifest\" \"${CMAKE_CURRENT_SOURCE_DIR}/compatibility.manifest\"
                -outputresource:"${CMAKE_CURRENT_SOURCE_DIR}/bin/${CONFIG}/${PROJECT_NAME}.exe"\;\#1
        COMMENT "Adding manifest..."
    )
    COPY_FILES("${PROJECT_NAME}" "${CEF_BINARY_FILES}" "${CEF_BIN_ROOT}/${CONFIG}" "${PROJECT_SOURCE_DIR}/bin/${CONFIG}")
    COPY_FILES("${PROJECT_NAME}" "${CEF_RESOURCE_FILES}" "${CEF_BIN_ROOT}/Resources" "${PROJECT_SOURCE_DIR}/bin/${CONFIG}")
endif()