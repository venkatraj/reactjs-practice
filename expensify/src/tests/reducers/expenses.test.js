import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state to empty array', () => {
  const actionObject = { type: '@@INIT' }
  const state = expensesReducer(undefined, actionObject)
  expect(state).toEqual([])
})

test('Should return state with added expense', () => {
  const expense = {
    id: '1',
    description: 'Stationaries',
    amount: 25000,
    note: '',
    createdAt: 0
  }
  const actionObject = { type: 'ADD_EXPENSE', expense }
  const state = expensesReducer(undefined, actionObject)
  expect(state).toEqual([expense])
})

test('Should return state with edited expense', () => {
  const actionObject = { 
    type: 'EDIT_EXPENSE', 
    id: '1', 
    updates: {
      note: 'Home use only',
      createdAt: 1000
    } 
  }
  const state = expensesReducer(expenses, actionObject)
  expect(state).toEqual([{
    id: '1',
    description: 'Gas',
    note: 'Home use only',
    amount: 76500,
    createdAt: 1000
  }, expenses[1], expenses[2]])
})

test('Should not edit expense if id not found', () => {
  const actionObject = { 
    type: 'EDIT_EXPENSE', 
    id: '-1', 
    updates: {
      note: 'Home use only',
      createdAt: 1000
    } 
  }
  const state = expensesReducer(expenses, actionObject)
  expect(state).toEqual(expenses)
})


test('Should return state with removed expense', () => {
  const actionObject = { type: 'REMOVE_EXPENSE', id: '1' }
  const state = expensesReducer(expenses, actionObject)
  expect(state).toEqual([expenses[1], expenses[2]])
})

test('Should not remove expenses if id not found', () => {
  const actionObject = { type: 'REMOVE_EXPENSE', id: '-1' }
  const state = expensesReducer(expenses, actionObject)
  expect(state).toEqual(expenses)
})