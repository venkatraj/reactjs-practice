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

export default expensesReducer