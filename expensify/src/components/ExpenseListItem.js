import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => {
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
      <p>Note: {note}</p>
      <p>Created At: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
  )
}

export default ExpenseListItem