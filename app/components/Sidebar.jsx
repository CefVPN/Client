import React from 'react'
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  return (
    <div className='Sidebar h-screen w-20 bg-Sidebar_dbg'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li 
            key={key} 
            className="row"
            onClick={() => {
              window.location.pathname = val.link;
              }}
            > 
              <div id='icon'>{val.icon}</div>{" "}
              <div id='title'>
                {val.title}
              </div>
            </li>
          );
       })}
      </ul>
    </div>
  )
}

