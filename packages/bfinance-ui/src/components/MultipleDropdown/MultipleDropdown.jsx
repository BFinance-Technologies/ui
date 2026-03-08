import React, { useState, useCallback } from 'react';
import { ArrowDownSLine } from '@bfinance/icons';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import useDropdown from '../../hooks/useDropdown';

import styles from './styles.module.css';

const MultipleDropdown = ({
  title = 'Select',
  options = [], // [{ label: string, value: string }]
  onSelect,
  onOpen,
  position = 'down',
  width = '200px',
  menuWidth,
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  // useCallback чтобы передать в хук стабильную ссылку до определения toggleOption
  const toggleOption = useCallback((option) => {
    setSelectedValues(prev => {
      const isSelected = prev.includes(option.value);
      const next = isSelected
        ? prev.filter(value => value !== option.value)
        : [...prev, option.value];
      onSelect?.(next.map(value => options.find(option => option.value === value)));
      return next;
    });
  }, [options, onSelect]);

  const {
    isOpen,
    focusedIndex,
    setFocusedIndex,
    dropdownRef,
    buttonRef,
    openDropdown,
    closeDropdown,
    handleKeyDown,
    menuPosClass,
    buttonStyle,
    menuStyle,
  } = useDropdown({
    options,
    position,
    width,
    menuWidth,
    onOpen,
    onKeySelect: toggleOption,
  });

  const hasSelection = selectedValues.length > 0;

  const toggleDropdown = () => {
    if (isOpen) closeDropdown();
    else openDropdown(0);
  };

  return (
    <div
      className={styles.dropdownContainer}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      <Button
        ref={buttonRef}
        variant={hasSelection ? 'primary' : 'secondary'}
        size="md"
        shape="rounded"
        rightIcon={
          <span className={`${styles.dropdownIcon} ${isOpen ? styles.rotated : ''}`}>
            <ArrowDownSLine />
          </span>
        }
        badge={hasSelection ? { value: selectedValues.length } : undefined}
        className={styles.dropdownToggle}
        style={buttonStyle}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-multiselectable="true"
      >
        <span className={styles.buttonLabel}>{title}</span>
      </Button>

      {isOpen && (
        <div
          role="listbox"
          aria-multiselectable="true"
          className={`${styles.dropdownMenu} ${styles[menuPosClass]}`}
          style={menuStyle}
        >
          {options.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            const isFocused = focusedIndex === index;
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`${styles.dropdownItem} ${isFocused ? styles.dropdownItemFocused : ''}`}
                onClick={() => toggleOption(option)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <div onClick={e => e.stopPropagation()}>
                  <Checkbox
                    key={`${option.value}-${isSelected}`}
                    isChecked={isSelected}
                    size="sm"
                    onChange={() => toggleOption(option)}
                  />
                </div>
                <span className={styles.dropdownItemLabel}>{option.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultipleDropdown;
