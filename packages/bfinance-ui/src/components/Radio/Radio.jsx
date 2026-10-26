import React from 'react'

import styles from './styles.module.css'

const Radio = ({
  checked = false,
  onChange,
  label = '',
  caption = '',
  size = 'md', // sm, md
  disabled = false,
  name,
  value,
  id,
  className,
  ...props
}) => {
  const handleChange = (e) => {
    if (disabled) return
    onChange?.(e)
  }

  const hasLabel = Boolean(label || caption)

  return (
    <label className={`${styles.container} ${styles[size]} ${disabled ? styles.wrapperDisabled : ''} ${className || ''}`} {...props}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={`${styles.control} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''} ${hasLabel ? styles.controlWithLabel : ''}`}>
        {checked && <span className={styles.dot} />}
      </span>

      {(label || caption) && (
        <span className={styles.textWrapper}>
          {label && <span className={styles.label}>{label}</span>}
          {caption && <span className={styles.caption}>{caption}</span>}
        </span>
      )}
    </label>
  )
}

export default Radio
