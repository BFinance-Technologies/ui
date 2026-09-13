import React from 'react'
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
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    styles[mode],
    styles.iconOnly,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span className={styles.icon}>{children}</span>
    </button>
  )
}

export default IconButton