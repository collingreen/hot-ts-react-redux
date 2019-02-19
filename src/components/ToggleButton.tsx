import * as React from 'react'

export interface ToggleButtonProps {
  on?: boolean
  className?: string
  onClick?(): void
}

const getClassName = (...classNames: string[]) =>
  classNames.filter(Boolean).join(' ')

const ToggleButton = ({ on, className = '', ...props }: ToggleButtonProps) => (
  <span className="toggle">
    <input className="toggle-input" type="checkbox" />
    <button
      data-testid="toggle-button"
      className={getClassName(
        className,
        'toggle-btn',
        on ? 'toggle-btn-on' : 'toggle-btn-off'
      )}
      {...props}
    />
  </span>
)

export default ToggleButton
