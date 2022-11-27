import React from 'react'
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const router = useRouter();

  return (
    <div className='Sidebar titlebar_none h-screen w-20 bg-Sidebar_dbg transition-[width] duration-300 relative shadow-md shadow-gray-900 hover:w-56'
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut} 
    >
      <ul className='SidebarList pt-2'>
        {SidebarData.map((val, key) => {
          return (
            <li 
            key={key} 
            className="row text-white h-full cursor-pointer hover:bg-slate-600"
            onClick={() => router.push(val.link) }
            >
              <div className="sidebarlist pt-4 pb-4 ml-2 mr-2  transition-colors duration-100 flex rounded-md">
                  <div id='icon' className="stroke-white ml-5 justify-center items-center">{val.icon}</div>{" "}
                  <div id="title" className={isHovering ? "whitespace-nowrap ml-5 transition-all delay-1000" : "whitespace-nowrap hidden"}>
                    {val.title}
                  </div>
              </div>
            </li>
          );
       })}
      </ul>
    </div>
  )
}

