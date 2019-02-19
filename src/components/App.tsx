import * as React from 'react'
import { bind } from 'helpful-decorators'
import { connect } from 'react-redux'

import { AppState } from '../store'
import { changeSwitch } from '../store/letters/actions'
import Toggle from './Toggle'

interface AppProps {
  a: boolean
  b: boolean

  changeSwitch: typeof changeSwitch
}

class App extends React.PureComponent<AppProps, {}> {
  constructor(props: AppProps) {
    super(props)
  }

  private onToggleChange(key: 'a' | 'b'): void {
    this.props.changeSwitch(key)
  }

  @bind
  private getToggleChanger(key: 'a' | 'b'): () => void {
    return () => this.onToggleChange(key)
  }

  render() {
    return (
      <>
        <div className="container">
          Toggle A:
          <Toggle on={this.props.a} onChange={this.getToggleChanger('a')} />
        </div>
        <div className="container">
          Toggle B:
          <Toggle on={this.props.b} onChange={this.getToggleChanger('b')} />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    a: state.letters.a,
    b: state.letters.b,
  }
}

const mapDispatchToProps = {
  changeSwitch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
