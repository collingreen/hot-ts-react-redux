import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'

import './index.css'
import App from './components/App'

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <div style={{ 'text-align': 'center', width: '100%' }}>
        <h2>HMR Example</h2>
        <h3>
          Change the state using the toggles, then edit a file to see the change
          instantly.
        </h3>
      </div>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(renderApp)
}

renderApp()
