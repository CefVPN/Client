import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
    overlay: {
        position: "fixed",
        backgroundColor: 'rgba(33, 37, 43, 0.70)'
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
        borderRadius: '20px'
    },
};

const ModalComponent = ({ isOpen, closeModal, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            onRequestClose={closeModal}
            style={modalStyles}
        >
            {children}
        </Modal>
    );
}


export default ModalComponent;