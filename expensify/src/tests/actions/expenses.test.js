import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('Should return a remove action object', () => {
  const result = removeExpense('some_unique_id')
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'some_unique_id'
  })
})

test('Should return a edit action object', () => {
  const updates = {
    description: 'Coffee',
    note: 'Old habit',
    amount: 800,
    createdAt: 1200
  }
  const result = editExpense('123', updates)

  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates
  })
})

test('should return a add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Final payment at this address',
    amount: 400000,
    createdAt: 12345
  }

  const result = addExpense(expenseData)

  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should return a add expense object with default values', () => {
  const result = addExpense()
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})