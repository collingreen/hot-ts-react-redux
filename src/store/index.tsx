import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'

import { lettersReducer } from './letters/reducers'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  letters: lettersReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middleWareEnhancer = applyMiddleware(sagaMiddleware)

  var win = window as any

  if (!win.store) {
    win.store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    )
    win.__sagaTask = sagaMiddleware.run(rootSaga)
    win.__sagaMiddleware = sagaMiddleware
  } else {
    win.store.replaceReducer(rootReducer)

    // re-import the saga list
    const newRootSaga = require('./sagas').default

    // cancel any current sagas and attach new ones
    win.__sagaTask.cancel()
    win.__sagaTask.toPromise().then(() => {
      win.__sagaTask = win.__sagaMiddleware.run(newRootSaga)
    })
  }

  return win.store
}
