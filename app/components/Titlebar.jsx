import React from 'react'
import { Close_WND, Min_WND, Max_WND } from './Handler'

function Titlebar() {
  return (
    <div className='titlebar absolute w-full h-8 flex justify-end'>
      <div className="buttons flex titlebar_none">
        <div className="minimize p-2 px-3 hover:bg-opacity-20 hover:bg-gray-700" onClick={Min_WND}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width={20} height={20} viewBox="0 2 24 24" strokeWidth="1" stroke="white" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1={5} y1={12} x2={19} y2={12}></line>
          </svg>
        </div>
        <div className="maximize_btn p-2 px-4 hover:bg-opacity-20 hover:bg-gray-700" onClick={Max_WND}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square" width={14} height={14} viewBox="0 -1 24 24" stroke-width={1} stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x={4} y={4} width={16} height={16} rx={2}></rect>
          </svg>
        </div>
        <div className="close_btn p-2 px-3 hover:bg-red-700" onClick={Close_WND}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={19} height={19} viewBox="0 2 24 24" strokeWidth={0.8} stroke="white" fill="none">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1={18} y1={6} x2={6} y2={18}></line>
            <line x1={6} y1={6} x2={18} y2={18}></line>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Titlebar