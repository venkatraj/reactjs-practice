import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense, editExpense, removeExpense } from './actions/expenses'
import 'normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// Transactions
const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 80000, createdAt: 2000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 50000, createdAt: -12000 }))
const expenseThree = store.dispatch(addExpense({ description: 'To be delete' }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 72500, note: 'HP!!' }))
store.dispatch(removeExpense(expenseThree.expense.id))

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)