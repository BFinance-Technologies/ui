import styles from './styles.module.css'

const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,

  leftIcon,
  rightIcon,
  onIconClick,

  width = '100%',
  height,

  containerPadding = '10px 12px',
  containerBorder = '1px solid #DEE0E3',
  containerBorderRadius = '12px',
  containerBackground = '#FFF',
  containerGap = '4px',

  inputPadding = '0 4px',
  inputFontSize = '14px',
  inputFontWeight = '400',
  inputFontFamily = 'var(--font-Inter)',
  inputLineHeight = '20px',
  inputLetterSpacing = '-0.1px',
  inputColor,
  inputBackground = 'transparent',

  placeholderColor = 'rgba(0, 0, 0, 0.40)',

  name,
  id,
  autoComplete,
  autoFocus,
  maxLength,
  readOnly,
  onFocus,
  onBlur,
  onKeyDown,
  className,
  inputClassName,
}) => {
  const containerStyle = {
    width,
    height,
    padding: containerPadding,
    border: containerBorder,
    borderRadius: containerBorderRadius,
    background: containerBackground,
    gap: containerGap,
  }

  const inputStyle = {
    padding: inputPadding,
    fontSize: inputFontSize,
    fontWeight: inputFontWeight,
    fontFamily: inputFontFamily,
    lineHeight: inputLineHeight,
    letterSpacing: inputLetterSpacing,
    color: inputColor,
    background: inputBackground,
    '--placeholder-color': placeholderColor,
  }

  return (
    <div
      className={`${styles.container} ${className || ''}`}
      style={containerStyle}
    >
      {leftIcon && (
        <img
          src={leftIcon}
          alt=""
          className={styles.icon}
          onClick={onIconClick}
          style={{ cursor: onIconClick ? 'pointer' : 'default' }}
        />
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        maxLength={maxLength}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`${styles.input} ${inputClassName || ''}`}
        style={inputStyle}
      />

      {rightIcon && (
        <img
          src={rightIcon}
          alt=""
          className={styles.icon}
          onClick={onIconClick}
          style={{ cursor: onIconClick ? 'pointer' : 'default' }}
        />
      )}
    </div>
  )
}

export default Input
