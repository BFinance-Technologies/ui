import React, { useState } from 'react'
import styles from './styles.module.css'
import Badge from '../Badge/Badge'
const LinkButton = ({
  
  children,
  href = '#',
  size = 'md',  // md, sm
  mode = 'default', // default, destructive
  leftIcon,
  rightIcon,
  className,
  badge, // {leftIcon?: ReactNode, rightIcon?: ReactNode, value: number | string},
  disabled = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const badgeColorByMode = { default: 'gray', destructive: 'red' }

  const buttonClasses = [
    styles.button,
    styles[size],
    styles[mode],
    disabled && styles.disabled,
    isPressed && styles.pressing,
    className
  ].filter(Boolean).join(' ')

  function handleKeyDown(e) {
    if (disabled) return
    if (e.key === ' ' || e.key === 'Enter') {
      setIsPressed(true)
      if (e.key === ' ') {
        e.preventDefault()
        e.currentTarget.click()
      }
    }
  }

  function handleKeyUp(e) {
    if (e.key === ' ' || e.key === 'Enter') setIsPressed(false)
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={buttonClasses}
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
          color={badgeColorByMode[mode]}
          size={size}
          leftIcon={badge.leftIcon}
          rightIcon={badge.rightIcon}
          disabled={disabled}
        >
          {badge.value}
        </Badge>
      )}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </a>
  )
}

export default LinkButton

