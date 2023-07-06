import React from 'react'
import Modal from 'react-modal'
import { IconX } from '@tabler/icons-react';

const modalStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: 'rgba(33, 37, 43, 0)'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#292A2D",
    border: '1px solid #3C4043',
    borderRadius: '20px',
    maxWidth: "20rem"
  },
};

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
    >
      <div className="content">
        <div className="close flex justify-end">
          <div className="cursor-pointer" onClick={closeModal}>
            <IconX color="white" />
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
}


export default ModalComponent;