cmake_minimum_required(VERSION 3.15)
project (CefVPN)

set(CMAKE_MSVC_RUNTIME_LIBRARY "MultiThreadedDebug")

file(GLOB_RECURSE SRC_FILES src/*.cpp)

add_definitions(
    -DWIN32
    -D_WINDOWS
    -D__STDC_CONSTANT_MACROS
    -D__STDC_FORMAT_MACROS
    -D_WIN32
    -DUNICODE
    -D_UNICODE
    -DWINVER=0x0601
    -D_WIN32_WINNT=0x601
    -DNOMINMAX
    -DWIN32_LEAN_AND_MEAN
    -D_HAS_EXCEPTIONS=0
    -DPSAPI_VERSION=1
    -DCEF_USE_SANDBOX
    -DCEF_USE_ATL
    -D_HAS_ITERATOR_DEBUGGING=0
    -DCMAKE_INTDIR="Debug"
)

add_executable(${PROJECT_NAME} WIN32 ${SRC_FILES})

target_include_directories(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}/include/cef/
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

)

add_custom_command(
    TARGET ${PROJECT_NAME}
    POST_BUILD
    COMMAND "mt.exe" -nologo
            -manifest \"${CMAKE_CURRENT_SOURCE_DIR}/${PROJECT_NAME}.exe.manifest\" \"${CMAKE_CURRENT_SOURCE_DIR}/compatibility.manifest\"
            -outputresource:"${CMAKE_CURRENT_SOURCE_DIR}/build/Debug/${PROJECT_NAME}.exe"\;\#1
    COMMENT "Adding manifest..."
)



