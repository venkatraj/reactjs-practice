import moment from 'moment'
import filtersReducer from '../../reducers/filters'


test('Should return default state', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should return state with set text filter', () => {
  const setTextFilterObject = { type: 'SET_TEXT_FILTER', text: 'rent'}
  const state = filtersReducer(undefined, setTextFilterObject)
  expect(state.text).toBe('rent')
})

test('Should return state with default set text filter', () => {
  const setTextFilterObject = { type: 'SET_TEXT_FILTER', text: ''}
  const state = filtersReducer(undefined, setTextFilterObject)
  expect(state.text).toBe('')
})

test('Should return state with sort by amount filter', () => {
  const sortByAmountObject = { type: 'SORT_BY_AMOUNT' }
  const state = filtersReducer(undefined, sortByAmountObject)
  expect(state.sortBy).toBe('amount')
})

test('Should return state with sort by date filter', () => {
  const sortByDateObject = { type: 'SORT_BY_DATE'}
  const state = filtersReducer(undefined, sortByDateObject)
  expect(state.sortBy).toBe('date')
})

test('Should return state with set start date filter', () => {
  const setStartDateObject = { type: 'SET_START_DATE', startDate: moment(0).add(1, 'month') }
  const state = filtersReducer(undefined, setStartDateObject)
  expect(state.startDate).toStrictEqual(moment(0).add(1, 'month'))
})

test('Should return state with set end date filter', () => {
  const setEndDateObject = { type: 'SET_END_DATE', endDate: moment(0).add(1, 'month') }
  const result = filtersReducer(undefined, setEndDateObject)
  expect(result.endDate).toStrictEqual(moment(0).add(1, 'month'))
})