import React from 'react'
import { Button } from '@mui/material'
import Handler from '../components/Handler'

export default function Dash() {
  return (
    <div className="text-white absolute ml-20">
        <div className="mt-6 ml-20">
            <Button variant='outlined' onClick={Handler} className="mt-20">Start Chrome</Button>
        </div>
    </div>
  )
}
