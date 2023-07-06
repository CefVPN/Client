import React from 'react'
import { IconX, IconBrandOpenvpn, IconLink } from "@tabler/icons-react";

const ImportProfile = ({handleFileOpen}) => {
  return (
    <div>
      <div className="importProfile">
        <div className="select-none">
          <h2 className="flex text-white justify-center text-xl">
            Import Profile
          </h2> 
          <div className="flex option mt-5 justify-center">
            <div onClick={() => handleFileOpen()} className="flex flex-col profile bg-blue-700 hover:bg-blue-600 transition-colors text-white items-center mx-2 p-8 rounded-2xl">
              <IconBrandOpenvpn size={50} />
              <div className="title text-lg pt-2">File</div>
            </div>
            <div className="flex flex-col URL bg-blue-700 hover:bg-blue-600 transition-colors text-white items-center mx-2 p-8 rounded-2xl">
              <IconLink size={50} />
              <div className="title text-lg pt-2">URL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportProfile