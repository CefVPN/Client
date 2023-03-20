import React, { useState } from 'react'
import ModalComponent from './Modal'

function ImportProfile() {

    const [modalIsOpen, setModalIsOpen] = useState(true);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
      <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
        <h2>Modal Title</h2>
        <p>Modal content goes here</p>
        <button onClick={closeModal}>Close Modal</button>
      </ModalComponent>
    )
}

export default ImportProfile