import React from 'react'
import { Button, Box } from '@mui/material'
import { Handler, Disconnect, isFullscreen } from '../components/Handler'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function Dash() {
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
            <ComposableMap className='pr-5 pt-12'>
              <Geographies geography={"/features.json"}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} fill="#4f525c" stroke='none' />
                ))
              }
              </Geographies>
            </ComposableMap>
          </Box>
        </div>
    </div>
  )
}
