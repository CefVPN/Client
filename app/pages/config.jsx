import Titlebar from "../components/Titlebar"
import Sidebar from "../components/Sidebar"
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import { Switch, ToggleButtonGroup, ToggleButton } from "@mui/material";
import AntSwitch from "../components/AntSwitch";

export const ToggleTheme = createTheme({
  palette: {
    primary: {
      main: '#1290D9'
    },
    background: {
      default: '#000000',
    },
    divider: 'gray',
    action: {
      selectedOpacity: .30
    }
  },
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#000000",
            backgroundColor: '#fefefe'
          },
          "&:hover": {
            color: '#000000',
            backgroundColor: '#177ddc'
          }
        }
      }
    }
  }
})

const ToggleButtonthemed = styled(ToggleButton)({
  color: "white",
  size: "medium"
})

export default function Settings() {
  return (
    <div className="bg-main_dbg select-none h-screen w-screen">
      <div className="flex justify-center settings absolute w-full h-full">
        <div className="configs  rounded-md ml-[4rem] mt-20 w-[42rem] h-28">
          {/* Window Behavior Settings. */}
          <div className="Config_Window w-full h-full">
            <h1 className="text-white text-lg mb-2 font-thin">Window Behavior</h1>
            <div className="shadow-md fonts flex-col container h-full bg-config_bg rounded-md">
              <div className="h-1/2 flex justify-between items-center border-b-gray-500  border-b-[1px] ">
                <h2 className="ml-4 font-thin text-gray-200">Closing the Window Hides it to System Tray</h2>
                <AntSwitch className="mr-5" />
              </div>
              <div className="h-1/2 flex justify-between font-thin text-gray-200 items-center">
                <h2 className="ml-4">Start Window On Startup</h2>
                <AntSwitch className="mr-5" />
              </div>
            </div>
          </div>
          {/*  VPN Settings */}
          <div className="Config_Window w-full h-full mt-16">
            <h1 className="text-white text-lg mb-2 font-thin">VPN Options</h1>
            <div className="shadow-md fonts flex-col container h-full bg-config_bg rounded-md">
              <div className="h-1/2 flex justify-between items-center border-b-gray-500  border-b-[1px] ">
                <h2 className="ml-4 font-thin text-gray-200">Tunnel Type</h2>
                <div className="tun_opt_toggle mr-2">
                  <ThemeProvider theme={ToggleTheme}>
                    <ToggleButtonGroup
                      size="small"
                    >
                      <ToggleButtonthemed className="normal-case">TunWin</ToggleButtonthemed>
                      <ToggleButtonthemed className="normal-case">WinTun</ToggleButtonthemed>
                      <ToggleButtonthemed className="normal-case">ovpn-dco-win</ToggleButtonthemed>
                    </ToggleButtonGroup>
                  </ThemeProvider>
                </div>
              </div>
              <div className="h-1/2 flex justify-between font-thin text-gray-200 items-center">
                <h2 className="ml-4">Allow Local DNS resolvers</h2>
                <AntSwitch className="mr-5" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Titlebar />
      <Sidebar />
    </div>
  ) 
}