import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ id, description, amount, note, createdAt, dispatch }) => {
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>Amount: {amount}</p>
      <p>Note: {note} </p>
      <p>Created At: {createdAt}</p>
      <button
        onClick={e => dispatch(removeExpense(id))}
      >
        Remove
    </button>
    </div>
  )
}

export default connect()(ExpenseListItem)