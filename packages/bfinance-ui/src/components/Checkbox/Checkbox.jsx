import React, { useState } from 'react';
import styles from './styles.module.css';

const CheckLine = () => (
  <svg width="10" height="8" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.364 9.193L15.556 0L16.971 1.414L6.364 12.021L0 5.657L1.414 4.243L6.364 9.193Z" fill="#fff" stroke="#fff" stroke-width={1.5}/>
  </svg>
);

const MinusLine = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11H19V13H5V11Z" fill="#fff" stroke="#fff" stroke-width={1.5}/>
  </svg>
);

const Checkbox = ({
  isChecked = false,
  indeterminate,
  onChange,
  label = '',
  caption = '',
  size = 'md', // sm, md
  disabled = false,
}) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    if (disabled) return;
    const nextChecked = !checked;
    setChecked(nextChecked);
    onChange?.({ target: { checked: nextChecked } });
  };  

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div className={`${styles.container}`}>
      <label className={`${styles.checkboxWrapper} ${styles[size]} ${disabled ? styles.wrapperDisabled : ''}`}>
        <input
          type="checkbox"
          role="checkbox"
          aria-checked={checked}
          tabIndex={disabled ? -1 : 0}
          checked={checked}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={styles.checkboxInput}
        />
        <div className={`${styles.checkboxCustom} ${checked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}>
          {checked && (indeterminate ? <MinusLine /> : <CheckLine />)}
        </div>
      </label>

      {(label || caption) && (
        <div className={`${styles.textWrapper} ${styles[size]}`}>
          {label && <span className={styles.label}>{label}</span>}
          {caption && <span className={styles.caption}>{caption}</span>}
        </div>
      )}
    </div>

  );
};

export default Checkbox;
