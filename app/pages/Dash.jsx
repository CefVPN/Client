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
  var cords = responseJson.loc;
  var region = responseJson.region;
  var country = responseJson.country;
  var city = responseJson.city;
  var commapos = cords.indexOf(',');
  var cordLat = parseFloat(cords.substring(0, commapos));
  var cordLong = parseFloat(cords.substring(commapos + 1, cords.length));
  const posobj = {
    lat: cordLat,
    long: cordLong,
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
  
  return (
    <div className="text-white absolute h-screen">
        <div className="main ml-28 absolute bottom-5" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
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
                <Skeleton variant='circular'>
                  <div className={`flag:${position.cn} mx-auto rounded-full text-3xl`}></div>
                </Skeleton>
              </div>
              <Skeleton sx={{ bgcolor: '#2E4053'}} width="7rem" height="">
                <h2 className='justify-center pl-2 justify-self-center'>{`${position.cy}, ${position.rg}`}</h2>
              </Skeleton>
            </div>
            <div className={isHovering ? "block" : "hidden"}>
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
