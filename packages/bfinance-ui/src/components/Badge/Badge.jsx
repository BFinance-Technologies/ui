import React from 'react';
import styles from './styles.module.css';

const Badge = ({
  color = 'gray', // gray, blue, green, orange, red, purple, white, white-destructive
  size = 'md',   // lg, md, sm, xs
  shape = 'rounded', // rounded, pill
  leftIcon,
  rightIcon,
  children,
  disabled = false,
  stroke = false,
  className = '',
  ...props
}) => {
  const classes = [
    styles.badge,
    styles[color],
    styles[size],
    styles[shape],
    className,
    disabled && styles.disabled,
    stroke && styles.stroke,
  ]
    .filter(Boolean)
    .join(' '); 

  return (
    <div className={classes} {...props}>
      {leftIcon && <div className={styles.icon}>{leftIcon}</div>}
      {children}
      {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
    </div>
  );
};

export default Badge;
