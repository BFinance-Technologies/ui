import React, { useState } from 'react'
import Badge from '../Badge/Badge'
import styles from './styles.module.css'

/*
  items: {
    value: string | number,
    label?: string,
    leadIcon?: ReactNode,
    tailIcon?: ReactNode,
    badge?: { value: number | string, leftIcon?: ReactNode, rightIcon?: ReactNode },
    disabled?: boolean,
    size?: 'lg' | 'md' | 'sm',
    shape?: 'pill' | 'rounded',
    onClick?: (value: string | number) => void,
  }
*/
const TabMenu = ({
  items = [],
  type = 'fill', // fill, segmented, line
  size = 'md', // lg, md, sm
  shape = 'rounded', // rounded, pill
  value,
  defaultValue,
  onChange,
  className,
  ...props
}) => {
  const isControlled = value !== undefined
  const [activeValue, setActiveValue] = useState(defaultValue ?? items[0]?.value)
  const currentValue = isControlled ? value : activeValue

  const handleSelect = (item) => {
    if (item.disabled) return
    if (!isControlled) setActiveValue(item.value)
    item.onClick?.(item.value)
    onChange?.(item.value)
  }

  const menuClasses = [styles.tabMenu, styles[type], styles[size], styles[shape], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={menuClasses} role="tablist" {...props}>
      {items.map((item, index) => {
        const itemSize = item.size || size
        const itemShape = item.shape || shape
        const isActive = currentValue === item.value

        const tabClasses = [
          styles.tab,
          styles[itemSize],
          type !== 'line' && styles[itemShape],
          isActive && styles.active,
          item.disabled && styles.disabled,
        ].filter(Boolean).join(' ')

        return (
          <button
            key={item.value ?? index}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={tabClasses}
            onClick={() => handleSelect(item)}
            disabled={item.disabled}
          >
            {item.leadIcon && <span className={styles.icon}>{item.leadIcon}</span>}
            {item.label && <span className={styles.text}>{item.label}</span>}
            {item.badge !== undefined && (
              <Badge
                className={styles.badge}
                color="gray"
                size={itemSize}
                shape="rounded"
                leftIcon={item.badge.leftIcon}
                rightIcon={item.badge.rightIcon}
              >
                {item.badge.value}
              </Badge>
            )}
            {item.tailIcon && <span className={styles.icon}>{item.tailIcon}</span>}
          </button>
        )
      })}
    </div>
  )
}

export default TabMenu
