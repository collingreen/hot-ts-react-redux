import * as React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'

import Toggle from '../Toggle'

const onChange = () => {}

test('Toggle Component renders with toggle switch', () => {
  const { getByTestId } = render(<Toggle onChange={onChange} />)
  expect(getByTestId('toggle-button')).toBeTruthy()
})

test('Toggle defaults to off', () => {
  const { getByTestId } = render(<Toggle onChange={onChange} />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})

test('Toggle uses on prop', () => {
  const { getByTestId } = render(<Toggle on={false} onChange={onChange} />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)

  render(<Toggle on={true} onChange={onChange} />)
  const toggleButton2 = getByTestId('toggle-button')
  expect(toggleButton2.classList.contains('toggle-btn-off')).toBe(true)
})
