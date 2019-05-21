import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm  from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm correactly with existing expense', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('Should set description state correctly', () => {
  const value = 'Some description'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('description')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('Should set amount state correctly', () => {
  const value = '12.34'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})

test('Should not set amount state correctly for invalid amount', () => {
  const value = '..34'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe('')
  expect(wrapper).toMatchSnapshot()
})

test('Should set note state correctly', () => {
  const value = 'A note to review later'
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('textarea').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
  expect(wrapper).toMatchSnapshot()
})