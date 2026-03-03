import React from 'react';
import styles from './styles.module.css';

const Badge = ({
  color = 'gray', // gray, blue, green, orange, red, purple, white
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
    <span className={classes} {...props}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </span>
  );
};

export default Badge;
