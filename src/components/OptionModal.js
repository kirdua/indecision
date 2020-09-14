import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    ariaHideApp={false}
    className='modal'
  >
    <h3 className='modal_title'>Selected Option</h3>
    {props.selectedOption && (
      <p className='modal_body'>{props.selectedOption}</p>
    )}
    <button className='button' onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;
