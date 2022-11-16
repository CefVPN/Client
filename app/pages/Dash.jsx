import React from 'react'
import { Button, Box } from '@mui/material'
import { Handler, Disconnect, isFullscreen } from '../components/Handler'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

export default function Dash() {

  let loc;

  fetch('https://ipinfo.io?token=a416934c6bf2af')
    .then(res => res.json())
    .then(data => {
        let output = parseFloat(data.loc);
        loc = output;

         console.log((loc));
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
              <Marker coordinates={[-112.0740, 33.4484]}>
                <circle r={8} fill="#F53" />
              </Marker>
            </ComposableMap>
          </Box>
            <Button variant='outlined' onClick={Handler} className="mt-20">Connect</Button>
            <Button variant='outlined' onClick={Disconnect} className="mt-20">Disconnect</Button> 
            <Button variant='outlined' onClick={isFullscreen} className="mt-20">Check Fullscreen</Button>
        </div>
    </div>
  )
}
