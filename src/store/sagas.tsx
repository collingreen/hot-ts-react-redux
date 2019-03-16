import { all } from 'redux-saga/effects'
import lettersRootSaga from './letters/sagas'

export default function* rootSaga() {
  yield all([lettersRootSaga()])
}
