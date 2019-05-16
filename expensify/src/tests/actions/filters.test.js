import moment from 'moment'
import { 
  setTextFilter, 
  sortByAmount, 
  sortByDate, 
  setStartDate, 
  setEndDate 
} from '../../actions/filters'


test('Should set text filter', () => {
  const text = 'Rent'
  const result = setTextFilter(text)
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('Should set text filter with default value', () => {
  const result = setTextFilter()
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('Should test sort by amount filter', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})

test('Should test sort by date filter', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('Should test set start date filter', () => {
  const result = setStartDate(moment(0))
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('Should test set start date filter with default value', () => {
  const result = setStartDate()
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: undefined
  })
})

test('Should test set end date filter', () => {
  const result = setEndDate(moment('2019-05-16'))
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment('2019-05-16')
  })
})

test('Should test set end date filter with default value', () => {
  const result = setEndDate()
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  })
})