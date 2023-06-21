import React, { useState } from 'react'
import ModalComponent from './Modal'
import { IconX, IconBrandOpenvpn, IconLink } from '@tabler/icons-react';
//import fs from 'fs'

const ImportProfile = ({modalIsOpen, closeModal}) => {

  async function openFile() {
    const [fileHandle] = await window.showOpenFilePicker({     
    
      types: [
        {
          description: 'OpenVPN Profile',
          accept: {
            '*/*': ['.ovpn']//Extensions you want to allow
          },
        },
      ],
      excludeAcceptAllOption: true, // this hides all files option
      multiple: false,
    });

    const file = await fileHandle.getFile();
    const content = await file.text();

    //console.log(content);
    window.importProfile(content);
    
  }

    return (
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
        <div className="select-none">
          <div className="close flex justify-end">
            <div className="cursor-pointer" onClick={closeModal}>
              <IconX color="white" />
            </div>
          </div>
          <h2 className="flex text-white justify-center text-xl">
            Import Profile
          </h2>
          <div className="flex option mt-5">
            <div onClick={openFile} className="flex flex-col profile bg-blue-700 hover:bg-blue-600 transition-colors text-white items-center mx-2 p-8 rounded-2xl">
              <IconBrandOpenvpn size={50} />
              <div className="title text-lg pt-2">File</div>
            </div>
            <div className="flex flex-col URL bg-blue-700 hover:bg-blue-600 transition-colors text-white items-center mx-2 p-8 rounded-2xl">
              <IconLink size={50} />
              <div className="title text-lg pt-2">URL</div>
            </div>
          </div>
        </div>
      </ModalComponent>
    )
}

export default ImportProfile;