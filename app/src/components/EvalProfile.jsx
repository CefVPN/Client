import React from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material';

const EvalProfile = ({profileName, isUserLocked, isAutoLogin}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [configName, setConfigName] = useState(profileName);

  const handleConfigName = (event) => {
    setConfigName(event.target.value)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <div className="evalModal">
      <div>
        <h2 className="flex text-white justify-center text-xl">
          Evaluate Profile
        </h2>
        <div className='InputField mt-5'>
          <TextField spellCheck={false} placeholder={profileName} id="profileName" onChange={handleConfigName} value={configName} label={"Profile Name"} variant="outlined" />
        </div>
      </div>
    </div>
  )
}

export default EvalProfile