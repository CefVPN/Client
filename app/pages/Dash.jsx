import { React, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Button, Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Handler, Disconnect, isFullscreen } from '../components/Handler'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

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
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const [position, setPosition] = useState({ x:0, y:0, cn:"", rg:"", cy:"" });
  getIPLocation().then(iploc => {
    position.x = iploc.lat;
    position.y = iploc.long;
    position.cn = iploc.cn;
    position.rg = iploc.rg;
    position.cy = iploc.cy;
    if(!checked)
    {
      refreshData();
      checked = true;
    }
    console.log(position.x, position.y);
  })
  return (
    <div className="text-white absolute ml-20">
        <div className="main ml-9 mt-8">
          <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#282C34",
            borderRadius: "12px",
            boxShadow: 3,
            ":hover": {
              boxShadow: 5,
              transition: "box-shadow",
              transitionDuration: "4000"
            }
          }}>
            <h1 className="text-lg pt-5 pl-5 opacity-75">Virtual Location</h1>
            <div className="inline-flex ml-4 mt-4">
              <div className="relative mx-auto rounded-full w-12 h-12">
                  <img className='mx-auto rounded-full' alt={position.cn}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${position.cn}.svg?`} draggable={false} width={48} height={48} />
              </div>
              <h2 className='justify-center pl-2'>{`${position.cy}, ${position.rg}`}</h2>
            </div>
            <ComposableMap className="flex" projectionConfig={{
              center: [18, -20],
              scale: 160
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
          </Box>
          <div className="actions flex gap-x-2">
            <ThemeProvider theme={theme}>
              <div className="connect">
                <Button variant='contained' color='primary' onClick={Handler} className="mt-20">Connect</Button>
              </div>
              <Button variant='outlined' onClick={Disconnect} className="mt-20">Disconnect</Button> 
              <Button variant='outlined' onClick className="mt-20">Show Location</Button> 
            </ThemeProvider>
          </div>
        </div>
    </div>
  )
}
