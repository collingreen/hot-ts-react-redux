import { LettersState } from './reducers'

export const ASYNC_TOGGLE = 'ASYNC_TOGGLE'
export const TOGGLE_LETTER = 'TOGGLE_LETTER'

export interface ToggleLetterAction {
  type: typeof TOGGLE_LETTER
  key: keyof LettersState
}

export interface AsyncToggleLetterAction {
  type: typeof ASYNC_TOGGLE
  key: keyof LettersState
}

export type LetterActionType = ToggleLetterAction

export function changeSwitch(key: keyof LettersState): ToggleLetterAction {
  return {
    type: TOGGLE_LETTER,
    key,
  }
}

export function asyncToggleLetter(
  key: keyof LettersState
): AsyncToggleLetterAction {
  return {
    type: ASYNC_TOGGLE,
    key,
  }
}
