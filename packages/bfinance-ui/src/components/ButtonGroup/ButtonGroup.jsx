import React, { useState } from 'react'
import Badge from '../Badge/Badge'
import styles from './styles.module.css'

/*
  items:{
    label: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
    badge?: {leftIcon?: ReactNode, rightIcon?: ReactNode, value: number | string},
    onClick?: () => void,
    disabled?: boolean,
  }
*/
const ButtonGroup = ({
  items = [],
  size = 'md', // lg, md, sm
  shape = 'rounded', // rounded, pill
  className,
  ...props
}) => {
  const [pressedIndex, setPressedIndex] = useState(null)
  const groupClasses = [styles.buttonGroup, className].filter(Boolean).join(' ')

  return (
    <div className={`${groupClasses} ${styles[size]} ${styles[shape]}`} {...props}>
      {items.map((item, index) => {
        const btnClasses = [
          styles.btn,
          styles[size],
          styles[shape],
          item.disabled && styles.disabled,
          pressedIndex === index && styles.pressing,
        ].filter(Boolean).join(' ')

        const handleKeyDown = (e) => {
          if (item.disabled) return
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault()
            setPressedIndex(index)
            item.onClick?.()
          }
        }

        const handleKeyUp = (e) => {
          if (e.key === ' ' || e.key === 'Enter') setPressedIndex(null)
        }

        return (
          <button
            key={index}
            type="button"
            className={btnClasses}
            onClick={item.onClick}
            disabled={item.disabled}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          >
            {item.leftIcon && <span className={styles.icon}>{item.leftIcon}</span>}
            {item.label && <span className={styles.text}>{item.label}</span>}
            {item.badge !== undefined && (
              <Badge 
                color="gray" 
                size={size} 
                shape="rounded"
                stroke
                leftIcon={item.badge.leftIcon} 
                rightIcon={item.badge.rightIcon}
              >
                {item.badge.value}
              </Badge>
            )}
            {item.rightIcon && <span className={styles.icon}>{item.rightIcon}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default ButtonGroup
