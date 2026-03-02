import React from 'react'
import styles from './styles.module.css'

const LinkButton = ({
  children,
  href = '#',
  size = 'md',  // md, sm
  mode = 'default', // default, destructive
  leftIcon,
  rightIcon,
  className,
  disabled = false,
  ...props
}) => {

  const buttonClasses = [
    styles.button,
    styles[size],
    styles[mode],
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ')

  function handleClick(e) {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    if (props.onClick) props.onClick(e)
  }

  return (
    <a
      href={disabled ? undefined : href}
      className={buttonClasses}
      onClick={handleClick}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </a>
  )
}

export default LinkButton

