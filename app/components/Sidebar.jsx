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
    <div className='Sidebar h-screen w-20 bg-Sidebar_dbg transition-[width] duration-300 relative hover:w-48' 
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut} 
    >
      <ul className='SidebarList pt-6'>
        {SidebarData.map((val, key) => {
          return (
            <li 
            key={key} 
            className="row text-white flex mb-8 justify-center w-full"
            onClick={() => {
              window.location.pathname = val.link;
              }}
            > 
              <div id='icon' className="stroke-white place-items-center">{val.icon}</div>{" "}
              <div id="title" className={isHovering ? "whitespace-nowrap ml-4" : "hidden"}>
                {val.title}
              </div>
            </li>
          );
       })}
      </ul>
    </div>
  )
}

