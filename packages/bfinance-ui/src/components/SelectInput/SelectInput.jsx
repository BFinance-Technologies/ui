import React, { useCallback, useRef, useState, useLayoutEffect } from 'react'
import { InformationLine, CheckLine } from '@bfinance/icons'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import { Tooltip } from '../Tooltip'
import useDropdown from '../../hooks/useDropdown'
import styles from './styles.module.css'

const TAG_COLORS = ['blue', 'red', 'purple', 'green', 'orange']

const tagColorForIndex = (index) => TAG_COLORS[index % TAG_COLORS.length]

const SelectInput = ({
  type = 'default', // default, multi-select, avatar
  size = 'md', // md, sm
  mode = 'default', // default, destructive
  disabled = false,

  label,
  optionalText = '(optional)',
  showOptionalText = true,
  required = false,

  options = [], // [{ value, label, avatar, supportText, tag: { label, color } }]
  value, // default/avatar: string | number. multi-select: array
  onChange,

  placeholder = 'Select...',
  leadIcon,
  leadIconTooltip,
  badge,
  tailIcon,
  tailIconTooltip,

  helperText,
  helperIcon,

  position = 'down',
  className,
  ...props
}) => {
  const isMultiSelect = type === 'multi-select'
  const isAvatar = type === 'avatar'

  const selectedValues = isMultiSelect ? (Array.isArray(value) ? value : []) : null
  const selectedOption = !isMultiSelect
    ? options.find((option) => option.value === value)
    : null

  const onKeySelectRef = useRef(null)

  const handleSelect = useCallback((option) => {
    if (isMultiSelect) {
      const exists = selectedValues?.includes(option.value)
      const next = exists
        ? selectedValues.filter((val) => val !== option.value)
        : [...(selectedValues || []), option.value]
      onChange?.(next)
    } else {
      onChange?.(option.value)
      dropdown.closeDropdown()
    }
  }, [isMultiSelect, selectedValues, onChange]) // eslint-disable-line react-hooks/exhaustive-deps

  const dropdown = useDropdown({
    options,
    position,
    onKeySelect: useCallback((option) => onKeySelectRef.current?.(option), []),
  })

  onKeySelectRef.current = handleSelect

  const panelScrollRef = useRef(null)
  const [thumb, setThumb] = useState(null) // { top, height } or null when no overflow

  const updateThumb = useCallback(() => {
    const el = panelScrollRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    if (scrollHeight <= clientHeight) {
      setThumb(null)
      return
    }
    const height = Math.max((clientHeight / scrollHeight) * clientHeight, 24)
    const top = (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - height)
    setThumb({ top, height })
  }, [])

  useLayoutEffect(() => {
    if (dropdown.isOpen) updateThumb()
  }, [dropdown.isOpen, options, updateThumb])

  const toggleOpen = () => {
    if (disabled) return
    if (dropdown.isOpen) {
      dropdown.closeDropdown()
      return
    }
    const initialIndex = !isMultiSelect
      ? options.findIndex((option) => option.value === value)
      : 0
    dropdown.openDropdown(initialIndex >= 0 ? initialIndex : 0)
  }

  const fieldClasses = [
    styles.field,
    dropdown.isOpen && styles.fieldOpen,
    disabled && styles.fieldDisabled,
  ].filter(Boolean).join(' ')

  const rootClasses = [
    styles.wrapper,
    styles[size],
    mode === 'destructive' && styles.destructive,
    disabled && styles.disabled,
    className,
  ].filter(Boolean).join(' ')

  const visibleTags = isMultiSelect ? selectedValues.slice(0, 3) : []
  const overflowCount = isMultiSelect ? Math.max(selectedValues.length - visibleTags.length, 0) : 0

  return (
    <div className={rootClasses} {...props}>
      {label && (
        <div className={styles.labelRow}>
          <span className={styles.labelTextGroup}>
            <span className={styles.labelText}>{label}</span>
            {showOptionalText && <span className={styles.optionalText}>{optionalText}</span>}
            {required && <span className={styles.requiredMark}>*</span>}
          </span>
        </div>
      )}

      <div className={styles.fieldRow} ref={dropdown.dropdownRef} onKeyDown={disabled ? undefined : dropdown.handleKeyDown}>
        <div
          ref={dropdown.buttonRef}
          className={fieldClasses}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={dropdown.isOpen}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={toggleOpen}
        >
          <div className={styles.fieldWrap}>
            {isAvatar && selectedOption ? (
              <div className={styles.placeholderText}>
                {selectedOption.avatar && (
                  <Avatar type="userpic" size="xs" src={selectedOption.avatar} alt="" className={styles.avatar} />
                )}
                <span className={`${styles.text} ${styles.textFilled}`}>{selectedOption.label}</span>
                {selectedOption.supportText && (
                  <span className={styles.supportText}>{selectedOption.supportText}</span>
                )}
              </div>
            ) : isAvatar ? (
              <div className={styles.placeholderWrap}>
                <Avatar type="empty" size="xs" alt="" className={styles.avatar} />
                <div className={styles.placeholderText}>
                  <span className={styles.text}>{placeholder}</span>
                </div>
              </div>
            ) : (
              <div className={styles.placeholderWrap}>
                {leadIcon && (
                  leadIconTooltip ? (
                    <Tooltip text={leadIconTooltip} tip="topLeft" size="sm">
                      <span className={styles.icon20}>{leadIcon}</span>
                    </Tooltip>
                  ) : (
                    <span className={styles.icon20}>{leadIcon}</span>
                  )
                )}
                <div className={styles.placeholderText}>
                  {isMultiSelect && visibleTags.length > 0 ? (
                    <>
                      {visibleTags.map((tagValue, index) => {
                        const option = options.find((opt) => opt.value === tagValue)
                        if (!option) return null
                        return (
                          <Badge
                            key={option.value}
                            className={styles.tagBadge}
                            color={option.tag?.color || tagColorForIndex(index)}
                            size="sm"
                            stroke
                          >
                            <span className={styles.tagBadgeLabel}>{option.chipLabel || option.label}</span>
                          </Badge>
                        )
                      })}
                      {overflowCount > 0 && (
                        <span className={styles.overflowCount}>+{overflowCount} more</span>
                      )}
                    </>
                  ) : (
                    <span className={`${styles.text} ${!isMultiSelect && selectedOption ? styles.textFilled : ''}`}>
                      {!isMultiSelect && selectedOption ? selectedOption.label : placeholder}
                    </span>
                  )}
                </div>
              </div>
            )}

            {badge && (
              <div className={styles.badgeSlot}>
                <Badge
                  className={styles.badge}
                  color="gray"
                  size="sm"
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
          </div>
        </div>

        {dropdown.isOpen && (
          <div className={styles.panel}>
            <div
              ref={panelScrollRef}
              role="listbox"
              aria-multiselectable={isMultiSelect}
              className={styles.panelScroll}
              onScroll={updateThumb}
            >
            {options.length === 0 && (
              <div className={styles.panelEmpty}>No options</div>
            )}
            {options.map((option, index) => {
              const isSelected = isMultiSelect
                ? selectedValues.includes(option.value)
                : option.value === value
              const isFocused = dropdown.focusedIndex === index
              return (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={[
                    styles.item,
                    isSelected && styles.itemSelected,
                    isFocused && styles.itemFocused,
                  ].filter(Boolean).join(' ')}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => dropdown.setFocusedIndex(index)}
                >
                  <div className={styles.itemWrap}>
                    {isMultiSelect && (
                      <span className={`${styles.itemCheckbox} ${isSelected ? styles.itemCheckboxChecked : ''}`}>
                        {isSelected && <CheckLine />}
                      </span>
                    )}
                    {option.avatar && (
                      <Avatar type="userpic" size="xs" src={option.avatar} alt="" className={styles.avatar} />
                    )}
                    <div className={styles.itemText}>
                      <span className={styles.itemName}>{option.label}</span>
                      {option.supportText && (
                        <span className={styles.itemHandle}>{option.supportText}</span>
                      )}
                      {option.tag?.label && (
                        <span className={styles.itemTag}>
                          <Badge color={option.tag.color || 'gray'} size="xs" stroke>
                            {option.tag.label}
                          </Badge>
                        </span>
                      )}
                    </div>
                    {!isMultiSelect && isSelected && (
                      <span className={styles.itemCheck}>
                        <CheckLine />
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
            </div>
            {thumb && (
              <span
                className={styles.scrollThumb}
                style={{ top: thumb.top, height: thumb.height }}
              />
            )}
          </div>
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
}

export default SelectInput
