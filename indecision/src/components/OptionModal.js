import React from 'react'
import Modal from 'react-modal'


const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.closeModal}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h2>Selected Option</h2>
    <p>{props.selectedOption}</p>
    <button 
      className="button"
      onClick={props.closeModal}
    >
      Okay
    </button>
  </Modal>
)


export default OptionModal