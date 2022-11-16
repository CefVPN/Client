import { React, useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import { Handler, Disconnect, isFullscreen } from '../components/Handler'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

async function getIPLocation() {
  const response = await fetch('https://ipinfo.io/?token=a416934c6bf2af');
  const responseJson = await response.json();
  var cords = responseJson.loc;
  var commapos = cords.indexOf(',');
  var cordLat = parseFloat(cords.substring(0, commapos));
  var cordLong = parseFloat(cords.substring(commapos + 1, cords.length));
  const posobj = {
    lat: cordLat,
    long: cordLong
  }
  return posobj;
}

export default function Dash() {
  const [position, setPosition] = useState({ x:0, y:0 });
  let xpos;
  let ypos;
  getIPLocation().then(iploc => {
    xpos = iploc.lat;
    ypos = iploc.long;
    console.log(xpos, ypos);
  })
  useEffect(() => {
    position.x = xpos;
    position.y = ypos;
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
            <ComposableMap className="flex">
              <Geographies geography={"/features.json"}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#4f525c" stroke='#4f525c' pointerEvents={"none"} />
                ))
              }
              </Geographies>
              <Marker coordinates={[position.y, position.x]}> 
                <circle r={8} fill="#F53" opacity={0} />
              </Marker>
            </ComposableMap>
          </Box>
            <Button variant='outlined' onClick={Handler} className="mt-20">Connect</Button>
            <Button variant='outlined' onClick={Disconnect} className="mt-20">Disconnect</Button> 
            <Button variant='outlined' className="mt-20">Show Location</Button>
        </div>
    </div>
  )
}
