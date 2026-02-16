import React from 'react'
import styles from './styles.module.css'

const IconButton = ({
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  target = 'default',
  className,
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    styles[target],
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
      {...props}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  )
}

export default IconButton

