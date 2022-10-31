import React from 'react'
import { Button } from '@mui/material'
import Handler from '../components/Handler'

export default function Dash() {
  return (
    <div className="text-white absolute ml-20">
        <div className="mt-6 ml-20 flex space-x-2">
            <Button variant='outlined' onClick={Handler} className="mt-20">Connect</Button>
            <Button variant='outlined' onClick={window.dis_cr} className="mt-20">Disconnect</Button>
        </div>
    </div>
  )
}
