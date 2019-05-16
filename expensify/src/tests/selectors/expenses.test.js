import moment from 'moment'
import selectExpenses from '../../selectors/expenses'

const expenses = [
  {
    id: '1',
    description: 'Gas',
    note: 'For Cooking',
    amount: 76500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '2',
    description: 'Rent',
    note: 'Final Payment',
    amount: 400000,
    createdAt: moment(0).valueOf()
  },
  {
    id: '3',
    description: 'Water',
    note: '',
    amount: 2500,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
]

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

test('Should filter expenses based on text', () => {
  const textFilter = {
    ...filters,
    text: 'a'
  }
  const result = selectExpenses(expenses, textFilter)
  expect(result).toEqual([expenses[2], expenses[0]])
})

test('Should not filter anything', () => {
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})

test('Should filter expenses based on start date', () => {
  const startDateFilter = {
    ...filters,
    startDate: moment(0)
  }
  const result = selectExpenses(expenses, startDateFilter)
  expect(result).toEqual([expenses[2], expenses[1]])
})

test('Should filter expenses based on end date', () => {
  const endDateFilter = {
    ...filters,
    endDate: moment(0)
  }
  const result = selectExpenses(expenses, endDateFilter)
  expect(result).toEqual([expenses[1], expenses[0]])
})

test('Should sort expenses based on amount', () => {
  const sortByAmount = {
    ...filters,
    sortBy: 'amount'
  }
  const result = selectExpenses(expenses, sortByAmount)
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]])
})

test('Should sort expenses based on amount', () => {
  const sortByDate = {
    ...filters,
    sortBy: 'date'
  }
  const result = selectExpenses(expenses, sortByDate)
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
})