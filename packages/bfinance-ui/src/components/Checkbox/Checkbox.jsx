import React from 'react';
import styles from './styles.module.css';

const Checkbox = ({
  checked = false,
  onChange,
  className = '',
  disabled = false,
  ...props
}) => {
  return (
    <div className={`${styles.checkboxWrapper} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
        {...props}
      />
      <div className={`${styles.checkboxCustom} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}>
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
