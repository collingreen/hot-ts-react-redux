import { LettersState } from './reducers'

export const TOGGLE_LETTER = 'TOGGLE_LETTER'

export interface ToggleLetterAction {
  type: typeof TOGGLE_LETTER
  key: keyof LettersState
}

export function changeSwitch(key: keyof LettersState): ToggleLetterAction {
  return {
    type: TOGGLE_LETTER,
    key,
  }
}

export type LetterActionTypes = ToggleLetterAction
