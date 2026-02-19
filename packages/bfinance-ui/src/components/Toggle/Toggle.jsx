import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const Toggle = ({
  size, // sm, md
  isActive = false,
  label = '',
  caption = '',
  disabled = false,
  ...props
}) => {
  const [checked, setChecked] = useState(isActive);

  useEffect(() => {
    setChecked(isActive);
  }, [isActive]);

  const handleToggle = () => {
    if (disabled) return;
    const next = !checked;
    setChecked(next);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.switchWrapper} ${styles[size]} ${disabled ? styles.disabled : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`${styles.track} ${checked ? styles.active : ''} ${disabled ? styles.trackDisabled : ''}`}
        >
          <div className={styles.thumb} />
        </div>
      </div>

      {(label || caption) && (
        <div className={`${styles.textBlock} ${styles[size]}`}>
          {label && <span className={styles.label}>{label}</span>}
          {caption && <span className={styles.caption}>{caption}</span>}
        </div>
      )}
    </div>
  );
};

export default Toggle;
