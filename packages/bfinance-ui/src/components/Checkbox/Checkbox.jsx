import React, { useState } from 'react';
import { CheckLine, MinusLine } from '@bfinance/icons'; 

import styles from './styles.module.css';

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
