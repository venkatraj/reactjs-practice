import React from 'react'
import Modal from 'react-modal'


const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.closeModal}
    ariaHideApp={false}
  >
    <h2>Selected Option</h2>
    <p>{props.selectedOption}</p>
    <button onClick={props.closeModal}>Okay</button>
  </Modal>
)


export default OptionModal