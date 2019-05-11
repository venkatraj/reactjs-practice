import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'



class ExpenseListFilters extends React.Component {
  state = {
    focusedInput: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (focusedInput) => {
    this.setState(() => ({ focusedInput }))
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.currentTarget.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.currentTarget.value == 'date') {
              this.props.dispatch(sortByDate())
            } else if (e.currentTarget.value == 'amount') {
              this.props.dispatch(sortByAmount())
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters)