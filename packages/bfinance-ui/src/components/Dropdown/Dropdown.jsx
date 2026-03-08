import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CheckLine, ArrowDownSLine } from '@bfinance/icons';

import { Button } from '../Button';

import styles from './styles.module.css';

const Dropdown = ({
  title = 'Select',
  options = [], // [{ label: string, value: string }]
  onSelect,
  onOpen,
  position = 'down',
  width = '200px',
  menuWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const normalizedPosition = String(position || 'down').toLowerCase();
  const positionClassMap = {
    down: 'menuDown',
    up: 'menuUp',
  };
  const menuPosClass = positionClassMap[normalizedPosition] || positionClassMap.down;

  const openDropdown = useCallback(() => {
    setIsOpen(true);
    const selectedIdx = options.findIndex(opt => opt.value === selectedOption?.value);
    setFocusedIndex(selectedIdx >= 0 ? selectedIdx : 0);
    if (onOpen) onOpen();
  }, [options, selectedOption, onOpen]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  }, []);

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeDropdown();
    if (onSelect) {
      onSelect(option);
    }
  };

  const handleKeyDown = useCallback((event) => {
    if (!isOpen) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openDropdown();
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          handleOptionClick(options[focusedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        closeDropdown();
        break;
      case 'Tab':
        closeDropdown();
        break;
    }
  }, [isOpen, focusedIndex, options, openDropdown, closeDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const buttonStyle = { width: width ?? 'auto' };
  const menuStyle = { width: menuWidth ?? width ?? 'auto' };

  return (
    <div 
      className={styles.dropdownContainer} 
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      <Button
        ref={buttonRef}
        variant="secondary"
        size="md"
        shape="rounded"
        rightIcon={
          <span className={`${styles.dropdownIcon} ${isOpen ? styles.rotated : ''}`}>
            <ArrowDownSLine />
          </span>
        }
        className={styles.dropdownToggle}
        style={buttonStyle}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.buttonLabel}>
          {selectedOption ? selectedOption.label : title}
        </span>
      </Button>

      {isOpen && (
        <div 
          role="listbox"
          aria-activedescendant={focusedIndex >= 0 ? `option-${options[focusedIndex]?.value}` : undefined}
          className={`${styles.dropdownMenu} ${styles[menuPosClass]}`} 
          style={menuStyle}
        >
          {options.map((option, index) => {
            const isSelected = selectedOption?.value === option.value;
            const isFocused = focusedIndex === index;
            return (
              <div
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={`${styles.dropdownItem} ${isSelected ? styles.dropdownItemSelected : ''} ${isFocused ? styles.dropdownItemFocused : ''}`}
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                <span className={styles.dropdownItemLabel}>{option.label}</span>
                {isSelected && (
                  <span className={styles.dropdownItemCheckmark}>
                    <CheckLine />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
