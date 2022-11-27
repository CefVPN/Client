import Titlebar from "../components/Titlebar"
import Sidebar from "../components/Sidebar"

export default function Settings() {
  return (
    <div className="bg-main_dbg select-none">
      <div className="content absolute ml-20 mt-8">
      Settings
      </div>
      <Titlebar />
      <Sidebar />
    </div>
  ) 
}