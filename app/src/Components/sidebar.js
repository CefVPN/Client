import React from 'react'
import { sidebarData } from './sidebarData';
import Titlebar from './Titlebar';
import '../App.css';

function sidebar() {
  return (
    <div className='Container'>
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
    </div>
  );
}

export default sidebar
