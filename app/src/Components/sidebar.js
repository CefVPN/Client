import React from 'react'
import { sidebarData } from './sidebarData';
import Titlebar from './Titlebar';

function sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {sidebarData.map((val, key) => {
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
  );
}

export default sidebar
