import { all, call, delay, put, takeLatest } from 'redux-saga/effects'

import { ASYNC_TOGGLE, TOGGLE_LETTER, LetterActionType } from './actions'

export function* doAsyncToggle(action: LetterActionType) {
  // contrived example - wait 1 second then fire the regular toggle action
  yield delay(1000)
  yield put({ type: TOGGLE_LETTER, key: action.key })
}

export function* watchAsyncToggle() {
  yield takeLatest(ASYNC_TOGGLE, doAsyncToggle)
}

export default function* rootSaga() {
  yield all([watchAsyncToggle()])
}
