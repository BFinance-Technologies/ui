import React, { useCallback, useRef } from 'react'
import { InformationLine, InformationFill, ArrowDownSLine, CloseLine } from '@bfinance/icons'
import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'
import useDropdown from '../../hooks/useDropdown'
import styles from './styles.module.css'

const InlineDropdown = ({ value, options, onChange, disabled, position = 'down', align = 'left' }) => {
  const onKeySelectRef = useRef(null)

  const dropdown = useDropdown({
    options,
    position,
    width: 'auto',
    onKeySelect: useCallback((option) => onKeySelectRef.current?.(option), []),
  })

  const handleSelect = useCallback((option) => {
    dropdown.closeDropdown()
    onChange?.(option.value)
  }, [dropdown, onChange])

  onKeySelectRef.current = handleSelect

  const toggle = () => {
    if (disabled) return
    if (dropdown.isOpen) {
      dropdown.closeDropdown()
      return
    }
    const selectedIndex = options.findIndex((option) => option.value === value)
    dropdown.openDropdown(selectedIndex >= 0 ? selectedIndex : 0)
  }

  const selected = options.find((option) => option.value === value)

  return (
    <div
      className={styles.inlineDropdown}
      ref={dropdown.dropdownRef}
      onKeyDown={disabled ? undefined : dropdown.handleKeyDown}
    >
      <button
        type="button"
        className={styles.inlineDropdownTrigger}
        onClick={toggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={dropdown.isOpen}
      >
        <span>{selected?.label ?? value}</span>
        <span className={`${styles.inlineDropdownIcon} ${dropdown.isOpen ? styles.rotated : ''}`}>
          <ArrowDownSLine />
        </span>
      </button>
      {dropdown.isOpen && (
        <div
          role="listbox"
          className={`${styles.inlineDropdownMenu} ${styles[dropdown.menuPosClass]} ${align === 'right' ? styles.inlineDropdownMenuRight : ''}`}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value
            const isFocused = dropdown.focusedIndex === index
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={[
                  styles.inlineDropdownItem,
                  isSelected && styles.inlineDropdownItemSelected,
                  isFocused && styles.inlineDropdownItemFocused,
                ].filter(Boolean).join(' ')}
                onClick={() => handleSelect(option)}
                onMouseEnter={() => dropdown.setFocusedIndex(index)}
              >
                {option.label}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

const Input = React.forwardRef(({
  type = 'default', // default, external, button, search, code, chip
  size = 'md', // md, xs
  mode = 'default', // default, destructive
  disabled = false,

  label,
  optionalText = '(optional)',
  showOptionalText = true,
  required = false,
  tooltipText,

  chips,
  onRemoveChip,
  onAddChip,

  flag,
  leadDropdownValue,
  leadDropdownOptions,
  onLeadDropdownChange,

  externalIcon,
  externalLabel = 'Company',

  leadIcon,
  leadIconTooltip,
  badge,
  tailIcon,
  tailIconTooltip,
  tailDropdownValue,
  tailDropdownOptions,
  onTailDropdownChange,

  buttonLabel = 'Button',
  onButtonClick,
  buttonDisabled = false,

  value,
  onChange,
  placeholder,
  htmlType = 'text',
  name,
  id,
  autoComplete,
  autoFocus,
  maxLength,
  readOnly,
  onFocus,
  onBlur,
  onKeyDown,

  helperText,
  helperIcon,

  className,
  inputClassName,
  ...props
}, ref) => {
  const isExternal = type === 'external'
  const isButton = type === 'button'
  const isSearch = type === 'search'
  const isCode = type === 'code'
  const isChip = type === 'chip'
  const resolvedPlaceholder = placeholder ?? (isCode ? '' : 'Placeholder')

  const handleChipKeyDown = (e) => {
    if (isChip && onAddChip && (e.key === 'Enter' || e.key === ',' || e.key === ' ') && value?.trim()) {
      e.preventDefault()
      onAddChip(value.trim())
    }
    onKeyDown?.(e)
  }

  const handleCodeChange = (e) => {
    e.target.value = e.target.value.replace(/\D/g, '')
    onChange?.(e)
  }

  const fieldClasses = [
    styles.field,
    isExternal && styles.fieldAttachedRight,
    isButton && styles.fieldAttachedLeft,
    isSearch && styles.fieldSearch,
    isCode && styles.fieldCode,
    isChip && styles.fieldChip,
  ].filter(Boolean).join(' ')

  const leadIconClass = isSearch ? styles.leadIconSm : styles.icon20

  const rootClasses = [
    styles.wrapper,
    styles[size],
    isCode && styles.wrapperCode,
    mode === 'destructive' && styles.destructive,
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={rootClasses} {...props}>
      {label && (
        <div className={styles.labelRow}>
          <span className={styles.labelTextGroup}>
            <span className={styles.labelText}>{label}</span>
            {showOptionalText && <span className={styles.optionalText}>{optionalText}</span>}
            {required && <span className={styles.requiredMark}>*</span>}
          </span>
          {tooltipText && (
            <Tooltip text={tooltipText} tip="bottomLeft" size="sm">
              <span className={styles.tooltipTrigger}>
                <InformationFill />
              </span>
            </Tooltip>
          )}
        </div>
      )}

      <div className={styles.fieldRow}>
        {isExternal && (
          <div className={styles.externalSegment}>
            {externalIcon && <span className={styles.icon20}>{externalIcon}</span>}
            <span className={styles.externalLabel}>{externalLabel}</span>
          </div>
        )}

        <div className={`${fieldClasses} ${disabled ? styles.fieldDisabled : ''}`}>
          {isCode ? (
            <input
              ref={ref}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={value}
              onChange={handleCodeChange}
              placeholder={resolvedPlaceholder}
              disabled={disabled}
              name={name}
              id={id}
              autoComplete={autoComplete}
              autoFocus={autoFocus}
              maxLength={maxLength ?? 1}
              readOnly={readOnly}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              className={`${styles.codeInput} ${inputClassName || ''}`}
            />
          ) : (
          <div className={styles.fieldWrap}>
            {chips?.map((chip, index) => {
              const chipLabel = typeof chip === 'string' ? chip : chip.label
              const chipKey = typeof chip === 'string' ? chip : (chip.id ?? chip.label)
              return (
                <span key={chipKey} className={styles.chip}>
                  <span className={styles.chipLabel}>{chipLabel}</span>
                  <button
                    type="button"
                    className={styles.chipRemove}
                    onClick={() => onRemoveChip?.(chip, index)}
                    disabled={disabled}
                    aria-label={`Remove ${chipLabel}`}
                  >
                    <CloseLine />
                  </button>
                </span>
              )
            })}
            {!isExternal && flag && <span className={styles.flag}>{flag}</span>}
            {!isExternal && leadDropdownOptions?.length > 0 && (
              <InlineDropdown
                value={leadDropdownValue}
                options={leadDropdownOptions}
                onChange={onLeadDropdownChange}
                disabled={disabled}
              />
            )}
            {!isExternal && !leadDropdownOptions?.length && leadDropdownValue && (
              <span className={styles.staticAffix}>{leadDropdownValue}</span>
            )}

            <div className={`${styles.placeholderWrap} ${isChip ? styles.placeholderWrapRelative : ''}`}>
              {leadIcon && (
                leadIconTooltip ? (
                  <Tooltip text={leadIconTooltip} tip="topLeft" size="sm">
                    <span className={leadIconClass}>{leadIcon}</span>
                  </Tooltip>
                ) : (
                  <span className={leadIconClass}>{leadIcon}</span>
                )
              )}
              <input
                ref={ref}
                type={htmlType}
                value={value}
                onChange={onChange}
                placeholder={resolvedPlaceholder}
                disabled={disabled}
                name={name}
                id={id}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                maxLength={maxLength}
                readOnly={readOnly}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={isChip ? handleChipKeyDown : onKeyDown}
                className={`${styles.input} ${inputClassName || ''}`}
              />

              {isChip && badge && (
                <div className={styles.badgeSlotOverlay}>
                  <Badge
                    className={`${styles.badge} ${styles.badgeFixedSizeMd}`}
                    color="gray"
                    size="sm"
                    disabled={disabled}
                  >
                    <span className={styles.badgeLabel}>{badge}</span>
                  </Badge>
                </div>
              )}
            </div>

            {!isChip && badge && (
              <div className={styles.badgeSlot}>
                <Badge
                  className={`${styles.badge} ${isSearch ? styles.badgeFixedSize : ''}`}
                  color="gray"
                  size={isSearch ? 'sm' : 'xs'}
                  disabled={disabled}
                >
                  <span className={styles.badgeLabel}>{badge}</span>
                </Badge>
              </div>
            )}

            {tailIcon && (
              tailIconTooltip ? (
                <Tooltip text={tailIconTooltip} tip="bottomRight" size="sm">
                  <span className={styles.icon20}>{tailIcon}</span>
                </Tooltip>
              ) : (
                <span className={styles.icon20}>{tailIcon}</span>
              )
            )}

            {tailDropdownOptions?.length > 0 && (
              <InlineDropdown
                value={tailDropdownValue}
                options={tailDropdownOptions}
                onChange={onTailDropdownChange}
                disabled={disabled}
                position="down"
                align="right"
              />
            )}
            {!tailDropdownOptions?.length && tailDropdownValue && (
              <span className={styles.staticAffix}>{tailDropdownValue}</span>
            )}
          </div>
          )}
        </div>

        {isButton && (
          <button
            type="button"
            className={styles.inputButton}
            onClick={onButtonClick}
            disabled={disabled || buttonDisabled}
          >
            {buttonLabel}
          </button>
        )}
      </div>

      {helperText && (
        <div className={styles.helperRow}>
          <span className={styles.helperIcon}>{helperIcon || <InformationLine />}</span>
          <span className={styles.helperText}>{helperText}</span>
        </div>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
