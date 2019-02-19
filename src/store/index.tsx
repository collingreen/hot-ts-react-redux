import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { lettersReducer } from './letters/reducers'

const rootReducer = combineReducers({
  letters: lettersReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  var win = window as any

  if (!win.store) {
    win.store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    )
  } else {
    win.store.replaceReducer(rootReducer)
  }

  return win.store
}
