import { TOGGLE_LETTER, ToggleLetterAction } from './actions'

export interface LettersState {
  a: boolean
  b: boolean
}

const initialState: LettersState = {
  a: false,
  b: false,
}

export function lettersReducer(
  state = initialState,
  action: ToggleLetterAction
): LettersState {
  switch (action.type) {
    case 'TOGGLE_LETTER':
      const update: Partial<LettersState> = {}
      update[action.key] = !state[action.key]

      return {
        ...state,
        ...(update as Partial<LettersState>),
      }
    default:
      return state
  }
}
