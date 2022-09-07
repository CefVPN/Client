cmake_minimum_required(VERSION 3.15)
project (CefVPN)

file(GLOB_RECURSE SRC_FILES src/*.cpp)

add_definitions(
)

add_executable(${PROJECT_NAME} WIN32 ${SRC_FILES})

target_include_directories(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}/include/cef/
)

target_link_libraries(${PROJECT_NAME} PUBLIC
    ${PROJECT_SOURCE_DIR}/lib/libcef.lib
    Ws2_32.lib
    Dbghelp.lib
    Shlwapi.lib
)

