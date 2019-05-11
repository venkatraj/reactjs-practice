import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => {
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>Amount: {amount}</p>
      <p>Note: {note} </p>
      <p>Created At: {createdAt}</p>
    </div>
  )
}

export default connect()(ExpenseListItem)