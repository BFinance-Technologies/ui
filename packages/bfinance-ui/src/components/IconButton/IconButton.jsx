import React, { useState } from 'react'
import styles from './styles.module.css'

const IconButton = ({
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, tertiary, ghost
  size = 'md',   // lg, md, sm, xs
  shape = 'rounded', // rounded, pill
  mode = 'default', // default, destructive
  className,
  children,
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    styles[mode],
    styles.iconOnly,
    disabled && styles.disabled,
    isPressed && styles.pressing,
    className
  ].filter(Boolean).join(' ')

  const handleKeyDown = (e) => {
    if (disabled) return
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      setIsPressed(true)
      onClick?.()
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.key === 'Enter') setIsPressed(false)
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...props}
    >
      <span className={styles.icon}>{children}</span>
    </button>
  )
}

export default IconButton