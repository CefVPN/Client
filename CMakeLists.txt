cmake_minimum_required(VERSION 3.15)
project (CefVPN)

include_directories(${PROJECT_SOURCE_DIR}/include)

file(GLOB_RECURSE SRC_FILES src/*.cpp)
file(GLOB_RECURSE SRC_INC_FILES src/*.hpp)

add_executable(${PROJECT_NAME} ${SRC_FILES} ${SRC_INC_FILES})

