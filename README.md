> [!IMPORTANT]
> I have stopped actively working on this project and have not updated it in a long time.

<div align=center>
  <img height=180 width=180 src=https://user-images.githubusercontent.com/76495154/200121487-b5ae885f-2afd-42a1-acb6-31b5708c9343.png>

# CefVPN Client
**A Chromium Embedded Framework-Based VPN Client.**

</div>

## Cef/VPN Client?
**CefVPN Client is an application that uses [CEF](https://bitbucket.org/chromiumembedded/cef/) and [OpenVPN3](https://github.com/OpenVPN/openvpn3) to provide a user-friendly and secure connection to protect yourself online. Unlike the official OpenVPN Connect client, CefVPN is completely open source with a more advanced UI. Best of all, it's the only VPN that will have built-in theming support.**

## Supported Platforms (ATM)

- [X] **Windows**
- [X] **Linux (Partial)**
- [ ] **macOS (Soon)**

## What's needed to build?
- #### Shared dependencies:
  - [cmake](https://cmake.org/)
  - [Node.js](https://nodejs.org/)
  - [Python3](https://www.python.org/)
- #### Windows:
  - [Visual Studio (2022)](https://visualstudio.microsoft.com/vs/community/)
  - [vcpkg](https://vcpkg.io)
- #### Linux: 
  - [GCC](https://gcc.gnu.org/)

## Let's Build!

> [!NOTE]
> ***This project does not provide CEF binary files. They must be downloaded from [cef-builds](https://cef-builds.spotifycdn.com/index.html) and placed inside `/lib` and `/bin/(Debug|Release)` manually.*** 

- ### Windows:
```
> git clone https://github.com/CefVPN/Client.git CefVPN && cd CefVPN
> cmake -B bin -S . -DCMAKE_TOOLCHAIN_FILE=<path_to_vcpkg>/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static -DVCPKG_OVERLAY_PORTS=deps\ports
> cmake --build bin --config Release --target CefVPN
```
- ### Linux (Debian):
```
$ git clone https://github.com/CefVPN/Client.git CefVPN && cd CefVPN
$ cmake -S . -B bin -DCMAKE_BUILD_TYPE:STRING=Release
$ cmake --build bin --config Release --target CefVPN
```

- ### macOS:
```
$ Coming Soon!
```
