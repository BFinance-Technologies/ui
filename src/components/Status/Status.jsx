import React from 'react';
import styles from './styles.module.css';

const Status = ({
  type = 'approved',
  variant = 'small',
  children,
  className = '',
  width,
  height,
  padding,
  borderRadius,
  ...props
}) => {
  const statusClass = variant === 'small' ? styles.statusSmall : styles.statusLarge;
  const typeClass = styles[type] || styles.approved;

  const customStyle = {
    ...(width && { width }),
    ...(height && { height }),
    ...(padding && { padding }),
    ...(borderRadius && { borderRadius })
  };

  return (
    <div
      className={`${statusClass} ${typeClass} ${className}`}
      style={customStyle}
      {...props}
    >
      {variant === 'large' && <span className={styles.statusIndicator}></span>}
      <span className={styles.statusText}>
        {children || type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </div>
  );
};

export default Status;
