import React from 'react'
import { FolderLine, ArrowRightSLine } from '@bfinance/icons'
import styles from './styles.module.css'

/*
  items: {
    label: string,
    icon?: ReactNode | null, // overrides the `icon` prop for this item; pass null to hide it
    href?: string,
    onClick?: (item) => void,
    more?: boolean, // renders an "..." collapse control instead of an icon+label item
  }[]
*/
const Breadcrumbs = ({
  items = [],
  size = 'sm', // sm, md
  divider = 'icon', // icon, slash
  icon = <FolderLine />, // default icon used for every item, unless overridden per item
  dividerIcon = <ArrowRightSLine />, // icon used when divider="icon"
  className,
  ...props
}) => {
  const rootClasses = [styles.breadcrumbs, styles[size], className].filter(Boolean).join(' ')

  return (
    <nav className={rootClasses} aria-label="Breadcrumb" {...props}>
      {items.map((item, index) => {
        const isActive = index === items.length - 1
        const Icon = 'icon' in item ? item.icon : icon

        const content = item.more ? (
          <span className={styles.more}>...</span>
        ) : (
          <span className={styles.stack}>
            {Icon && <span className={isActive ? styles.iconActive : styles.icon}>{Icon}</span>}
            <span className={isActive ? styles.labelActive : styles.label}>{item.label}</span>
          </span>
        )

        return (
          <span key={index} className={styles.item}>
            {item.href && !isActive ? (
              <a
                className={styles.link}
                href={item.href}
                onClick={(e) => item.onClick?.(item, e)}
              >
                {content}
              </a>
            ) : !isActive && item.onClick ? (
              <button type="button" className={styles.link} onClick={() => item.onClick(item)}>
                {content}
              </button>
            ) : (
              content
            )}

            {!isActive && (
              <span className={styles.divider}>
                {divider === 'icon' ? dividerIcon : <span className={styles.slash}>/</span>}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
