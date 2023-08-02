import { React } from 'react'
import { Disconnect } from '../components/Handler.jsx'

export const Dash = ({isConnected, setIsConnected, isConnecting, setIsConnecting}) => {

  function Connect() {
    window.str_cr('update', function(state) {
      setIsConnecting(!state);
      setIsConnected(state);
    });
  }

  function Power() {
    if(isConnected || isConnecting) {
      if(!isConnecting) {
        setIsConnected(!isConnected);
      }
      Disconnect();
    } else {
      Connect();
    }
    if(!isConnected) {
      setIsConnecting(!isConnecting)
    }
  }

  return (
    
    <div className="text-white absolute h-screen w-screen pl-5">
      <div className="Power-btn w-full h-full flex justify-center items-center">
        <div className={`w-48 h-48 rounded-full cursor-pointer ${isConnected ? "bg-emerald-600" : "bg-blue-600"} opacity-95 justify-center items-center flex -mt-32`}
          onClick={() => Power()}
        >
          <div className={`w-[11.5rem] h-[11.5rem] rounded-full ${isConnected ? "bg-emerald-600" : isConnecting ? "bg-blue-600" : "bg-main_dbg"} transition-colors`}>
            <div className="icon flex h-full rounded-full justify-center items-center">
              <svg id="load_icon" className={`${isConnecting ? "loader-spin" : "loader"}`} width="96" height="96" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="power" clipPath={"url(#clip0_2_2)"}>
                <path id="base" d="M7 6C5.78639 7.02477 4.91697 8.39771 4.50943 9.93294C4.10189 11.4682 4.17592 13.0915 4.7215 14.5833C5.26708 16.0751 6.25786 17.3632 7.55971 18.2732C8.86156 19.1833 10.4116 19.6714 12 19.6714C13.5884 19.6714 15.1384 19.1833 16.4403 18.2732C17.7421 17.3632 18.7329 16.0751 19.2785 14.5833C19.8241 13.0915 19.8981 11.4682 19.4906 9.93294C19.083 8.39771 18.2136 7.02477 17 6" strokeLinecap={"round"} strokeLinejoin={"round"}/>
                <path id="lineup" className={`${isConnecting && "-translate-y-full"} transition-all duration-500`} d="M12 2V10" strokeLinecap={"round"} strokeLinejoin={"round"}/>
                </g>
                {/*
                  isConnecting && <animateTransform attributeType="xml" attributeName="transform" begin={"2s"} type="rotate" from="0 0 0" to="360 0 0" dur="2s" additive="sum" repeatCount={isConnecting ? "indefinite" : "0"} />
                */}
              </svg>
            </div>
          </div>
        </div>
        <div className='mr-120'>
      </div>
      </div>
      <div className="loc-widget main ml-28 absolute bottom-5" onMouseOver={() => handleMouseOver} onMouseLeave={() => handleMouseOut}>
        </div>
        <div className="test">
        </div>
    </div>
  )
}