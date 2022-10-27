import React from 'react'
import { useState } from 'react';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='Sidebar titlebar_none h-screen w-20 bg-Sidebar_dbg transition-[width] duration-300 relative shadow-md shadow-gray-900 hover:w-56'
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut} 
    >
      <ul className='SidebarList pt-6'>
        {SidebarData.map((val, key) => {
          return (
            <li 
            key={key} 
            className="row text-white flex mb-8 h-full hover:bg-slate-600 cursor-pointer"
            onClick={() => {
              window.location.pathname = val.link;
              }}
            > 
              <div id='icon' className="stroke-white place-items-center ml-7">{val.icon}</div>{" "}
              <div id="title" className={isHovering ? "whitespace-nowrap ml-7 transition-all delay-1000" : "whitespace-nowrap hidden"}>
                {val.title}
              </div>
            </li>
          );
       })}
      </ul>
    </div>
  )
}

