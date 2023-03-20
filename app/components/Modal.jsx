import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    }
};

const ModalComponent = ({ isOpen, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            style={modalStyles}
        >
            {children}
        </Modal>
    );
}


export default ModalComponent;