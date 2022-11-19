import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, closeModal, successAction, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{ title }</h3>
                    <p className="py-4">{ message }</p>
                    <div className="modal-action">
                    <label onClick={closeModal} htmlFor="confirmationModal" className="btn">Cancel</label>
                    <label onClick={() => successAction(modalData._id)} htmlFor="confirmationModal" className="btn">{successButtonName}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;