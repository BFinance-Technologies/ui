import React from 'react'
import styles from './styles.module.css'

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  target = 'default',
  leftIcon,
  rightIcon,
  className,
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    styles[target],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  )
}

export default Button