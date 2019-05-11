import React from 'react';
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'



class ExpenseForm extends React.Component {

  constructor(props) {
    super(props)
    if (props.expense) {
      const { description, amount, note, createdAt } = props.expense
      this.state = {
        description,
        note,
        amount: (amount / 100).toString(),
        createdAt: moment(createdAt),
        calendarFocused: false,
        error: null,
        buttonText: 'Update Expense'
      }
    } else {
      this.state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: null,
        buttonText: 'Add Expense'
      }
    }
  }


  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.description || !this.state.amount) {
      const error = 'Please provided description and amount!'
      this.setState(() => ({ error }))
    } else {
      this.setState(() => ({ error: null }))
      const expense = {
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf()
      }
      this.props.onSubmit(expense)
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note to your expense (optional)"
            onChange={this.onNoteChange}
            value={this.state.note}
          >
          </textarea>
          <button>
            {this.state.buttonText}
          </button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm