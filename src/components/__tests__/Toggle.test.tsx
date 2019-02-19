import * as React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'

import Toggle from '../Toggle'

test('Toggle Component renders with toggle switch', () => {
  const { getByTestId } = render(<Toggle />)
  expect(getByTestId('toggle-button')).toBeTruthy()
})

test('Toggle defaults to off', () => {
  const { getByTestId } = render(<Toggle />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})

test('Toggle uses on prop', () => {
  const { getByTestId } = render(<Toggle on={false} />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)

  const { getByTestId } = render(<Toggle on={true} />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})
