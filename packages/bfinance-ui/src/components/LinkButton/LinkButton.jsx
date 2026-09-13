import React from 'react'
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
  const badgeColorByMode = { default: 'gray', destructive: 'red' }

  const buttonClasses = [
    styles.button,
    styles[size],
    styles[mode],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  function handleKeyDown(e) {
    if (disabled) return
    if (e.key === ' ') {
      e.preventDefault()
      e.currentTarget.click()
    }
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={buttonClasses}
      onKeyDown={handleKeyDown}
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

