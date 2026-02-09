import React from 'react'
import styles from './styles.module.css'

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'tertiary', // primary, secondary, tertiary
  leftIcon,
  rightIcon,
  leftIconDisabled,
  rightIconDisabled,
  iconGap = 2,
  height,
  width,
  fontSize,
  padding,
  borderRadius,
  className,
  disabled,
  ...props
}) => {
  const buttonStyle = {
    gap: `${iconGap}px`,
    height: height ? `${height}px` : '',
    width: width ? `${width}px` : '',
    fontSize: fontSize ? `${fontSize}px` : '',
    padding: padding || '',
    borderRadius: borderRadius || '',
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className || ''}`}
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {(leftIcon || (disabled && leftIconDisabled)) && <div className={styles.icon}>
        {disabled && leftIconDisabled
          ? typeof leftIconDisabled === 'string' ? <img src={leftIconDisabled} alt="" /> : leftIconDisabled
          : typeof leftIcon === 'string' ? <img src={leftIcon} alt="" /> : leftIcon}
      </div>}
      {children && <span className={styles.text}>{children}</span>}
      {(rightIcon || (disabled && rightIconDisabled)) && <div className={styles.icon}>
        {disabled && rightIconDisabled
          ? typeof rightIconDisabled === 'string' ? <img src={rightIconDisabled} alt="" /> : rightIconDisabled
          : typeof rightIcon === 'string' ? <img src={rightIcon} alt="" /> : rightIcon}
      </div>}
    </button>
  );
};

export default Button