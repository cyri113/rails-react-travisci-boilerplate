import React from 'react'
import Hello from '../../../app/javascript/components/Hello'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('display default name', () => {
  const { container } = render(<Hello />)
  expect(screen.getByRole('heading')).toHaveTextContent('Hello David!')
  expect(container).toMatchSnapshot()
})

test('display prop name', () => {
  const { container } = render(<Hello name='John' />)
  expect(screen.getByRole('heading')).toHaveTextContent('Hello John!')
  expect(container).toMatchSnapshot()
})