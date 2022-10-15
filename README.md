# CefVPN
**A Chromium Embeded Framework Based VPN.**

## Cef/VPN?
**CefVPN, is an Application that uses [CEF](https://bitbucket.org/chromiumembedded/cef/) and [OpenVPN3](https://github.com/OpenVPN/openvpn3) to provide a userfriendly and secure Connection to Protect Your Self-online. Unlike the official OpenVPN Connect Client CefVPN is completely Open Source with a more Advaced UI. Best of all its the Only VPN that will have bultin themeing support.**

## Supported Platforms (ATM)

- [X] **Windows**
- [ ] **MacOS (Soon)**
- [ ] **Linux (Soon)**

## Whats Needed to Build?
- [Visual Studio (2022)](https://visualstudio.microsoft.com/vs/community/)
- [vcpkg](https://vcpkg.io)
- [cmake](https://cmake.org/)
- [Node.js](https://nodejs.org/)

## Let's Build!
***Note: This Project Does Not Provide CEF binary Files and they Must Be Downloaded From [cef-builds](https://cef-builds.spotifycdn.com/index.html) and placed inside `/lib` and `/bin/(Debug|Release)` Manually. Please Refer to # for Additional Info.*** 

- ### Windows:
```
> git clone https://github.com/CefVPN/CefVPN.git CefVPN && cd CefVPN
> cmake -B bin -S . -DCMAKE_TOOLCHAIN_FILE=<path_to_vcpkg>/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-windows-static
> cmake --build bin --config Release --target CefVPN
```
- ### Linux/macOS:
```
$ Coming Soon!
```
