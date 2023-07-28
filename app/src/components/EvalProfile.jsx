import React from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material';

const EvalProfile = ({exitModal, profileName, isUserLocked, isAutoLogin}) => {


  const [configName, setConfigName] = useState(profileName);

  const handleConfigName = (event) => {
    setConfigName(event.target.value)
  }


  return (
    <div className="evalModal ">
      <div>
        <h2 className="flex text-white justify-center text-xl">
          Evaluate Profile
        </h2>
        <div className='InputField mt-5 w-full h-full'>
          <div className="status text-white mt-10">
            Profile Evaluated Successfully.
          </div>
          <button
          type="button"
          onClick={() => exitModal()}
          className="rounded-md bg-blue-600 mt-14 ml-44 bg-opacity-20 px-6 py-3 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Done!
          </button>
        </div>
      </div>
    </div>
  )
}

export default EvalProfile