import React from 'react';
import styles from './styles.module.css';

const ComponentName = ({
  children,
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ComponentName;
