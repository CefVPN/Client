import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Button, Box, Skeleton } from '@mui/material'
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { Handler, Disconnect, isFullscreen } from '../components/Handler'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import "country-flag-icons/3x2/flags.css";

const theme = createTheme({
  status: {
    danger: '#1B76D2',
  },
  palette: {
    primary: {
      light: "#1B76D2",
      main: '#1B76D2',
      darker: '#1B76D2',
    },
    neutral: {
      main: '#1B76D2',
      contrastText: '#1B76D2',
    },
  },
});

async function getIPLocation() {
  const response = await fetch('https://ipinfo.io/?token=a416934c6bf2af');
  const responseJson = await response.json();
  const region = await responseJson.region;
  const country = await responseJson.country;
  const city = await responseJson.city;
  const loc = await responseJson.loc.split(',');
  const coords = {
    latitude: await loc[0],
    longitude: await loc[1]
  };
  const posobj = {
    lat: coords.latitude,
    long: coords.longitude,
    rg: region,
    cn: country,
    cy: city
  }
  return posobj;
}

var checked = false;

export default function Dash() {
  const [position, setPosition] = useState({ x:0, y:0, cn:"", rg:"", cy:"" });
  //getIPLocation().then(iploc => {
  //  position.x = iploc.lat;
  //  position.y = iploc.long;
  //  position.cn = iploc.cn;
  //  position.rg = iploc.rg;
  //  position.cy = iploc.cy;
  //  if(!checked)
  //  {
  //    checked = true;
  //  }
  //  console.log(position.x, position.y);
  //})

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  function Power() {
    if(isConnected || isConnecting) {
      if(!isConnecting) {
        setIsConnected(!isConnected);
      }
      Disconnect();
    } else {
      window.str_cr('update', function(state) {
        setIsConnecting(state);
        setIsConnected(!state);
      });
    }
    if(!isConnected)    
      setIsConnecting(!isConnecting)
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
      </div>
      <div className="loc-widget main ml-28 absolute bottom-5" onMouseOver={() => handleMouseOver} onMouseLeave={() => handleMouseOut}>
          <Box
          className='overflow-hidden duration-300'
          sx={{
            width: 300,
            height: 120,
            backgroundColor: "#282C34",
            borderRadius: "12px",
            boxShadow: 3,
            ":hover": {
              boxShadow: 5,
              height: 300,
              transition: "box-shadow height",
            }
          }}>
            <h1 className="text-lg pt-5 pl-5 opacity-75">Virtual Location</h1>
            <div className="inline-flex ml-4 mt-4">
              <div className="relative mx-auto rounded-full w-12 h-12">
                <div className={`flag:${position.cn} mx-auto rounded-full text-3xl`}></div>
              </div>
              <h2 className='justify-center pl-2 items-center'>{`${position.cy}, ${position.rg}`}</h2>
            </div>
            <div className={""}>
              <ComposableMap className="flex" projectionConfig={{
                center: [18, -20],
                scale: 160,
                height: 200,
                width: 200
              }}>
                <Geographies geography={"/features.json"}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} fill="#4f525c" stroke='#4f525c' pointerEvents={"none"} />
                  ))
                }
                </Geographies>
                  <Marker coordinates={[position.y, position.x]}> 
                    <circle r={6} fill="#3DED97" opacity={checked ? 1 : 0} />
                    <circle r={60} fill="#1B76D2" opacity={checked ? 0.2 : 0} />
                  </Marker>
              </ComposableMap>
            </div>
          </Box>
        </div>
    </div>
  )
}