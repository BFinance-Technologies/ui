import React, { useState } from 'react'
import styles from './styles.module.css'
import Badge from '../Badge/Badge'

const BADGE_COLOR_BY_MODE = {
  primary:   { default: 'white', destructive: 'white-destructive' },
  secondary: { default: 'gray',  destructive: 'white-destructive' },
  tertiary:  { default: 'white',  destructive: 'white-destructive' },
  ghost:     { default: 'gray',  destructive: 'white-destructive' },
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, tertiary, ghost
  size = 'md', // lg, md, sm, xs
  shape = 'rounded', // rounded, pill
  mode = 'default', // default, destructive
  badge, // { value: number | string, leftIcon?: ReactNode, rightIcon?: ReactNode }
  leftIcon,
  rightIcon,
  className,
  disabled = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const buttonClasses = [
    styles.button,  
    styles[variant],
    styles[size],
    styles[shape],
    styles[mode],
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
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {badge && (
        <Badge
          size={size}
          stroke
          color={BADGE_COLOR_BY_MODE[variant]?.[mode]}
          leftIcon={badge.leftIcon}
          rightIcon={badge.rightIcon}
          disabled={disabled}
        >
          {badge.value}
        </Badge>
      )}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  )
}

export default Button