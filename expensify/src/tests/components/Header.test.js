import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Header'


test('Should render header correctly', () => {
  const renderer = new ShallowRenderer()
  renderer.render(<Header />)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})