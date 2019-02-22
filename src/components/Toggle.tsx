import * as React from 'react'
import ToggleButton from './ToggleButton'

interface ToggleProps {
  on?: boolean
  onChange: () => void
}

export default class Toggle extends React.PureComponent<ToggleProps, {}> {
  render() {
    return (
      <div className="toggle-container" data-testid="toggle-container">
        <ToggleButton on={this.props.on} onClick={this.props.onChange} />
      </div>
    )
  }
}
