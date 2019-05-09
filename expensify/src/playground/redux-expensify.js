import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// Actions
const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt  
  }
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})


const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// Reducers
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return state.concat({
        ...action.expense
      })
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// Store
const store = createStore(combineReducers({
  expenses: expensesReducer, 
  filters: filtersReducer
}))

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount > b.amount ? -1 : 1
    } else if (sortBy === 'date') {
      return a.createdAt > b.createdAt ? 1 : -1
    }
  })
}

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

// Transactions
const expenseOne = store.dispatch(addExpense({ description: 'June Rent', amount: 40000, createdAt: 2000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Filter Coffee', amount: 5000, createdAt: -12000 }))
const expenseThree = store.dispatch(addExpense({ description: 'To be delete'}))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2500, note: 'Hot Coffee!!' }))
store.dispatch(removeExpense(expenseThree.expense.id))

store.dispatch(setTextFilter('re'))
store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
store.dispatch(setStartDate(-11000))
store.dispatch(setEndDate(-1000))
store.dispatch(setStartDate())
store.dispatch(setEndDate())

// Demo State
const demoState = {
  expenses: [
    {
      id: 'asdf',
      description: 'January Rent',
      note: 'Last payment for NY address',
      amount: 50000,
      createdAt: 0
    }
  ],
  filters: {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
}