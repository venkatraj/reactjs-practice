import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
  return (
    <div>
    <h4>{description}</h4>
    <p>Amount: {amount}</p>
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