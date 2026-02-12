import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const ArrowDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Dropdown = ({
  title,
  options = [],
  onSelect,
  onOpen,
  customStyles = {},
  customTextStyles = {},
  customIconStyles = {},
  iconGap = 6,
  icon,
  width = 'auto',
  height = 'auto',
  padding = '10px 12px',
  fontSize = '14px',
  fontWeight = 500,
  lineHeight = '20px',
  menuWidth = 'auto',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen && onOpen) {
      onOpen();
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownStyles = {
    width,
    height,
    padding,
    gap: `${iconGap}px`,
    ...customStyles,
  };

  const textStyles = {
    fontSize,
    fontWeight,
    lineHeight,
    ...customTextStyles,
  };

  const menuStyles = {
    width: menuWidth,
    minWidth: menuWidth !== 'auto' ? menuWidth : '100%',
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div
        className={styles.dropdownToggle}
        onClick={toggleDropdown}
        style={dropdownStyles}
      >
        <span className={styles.dropdownTitle} style={textStyles}>
          {selectedOption ? selectedOption.label : title}
        </span>
        <div
          className={`${styles.dropdownIcon} ${isOpen ? styles.rotated : ''}`}
          style={customIconStyles}
        >
          {icon ? (
            typeof icon === 'string' ? (
              <img src={icon} alt="Toggle dropdown" />
            ) : (
              icon
            )
          ) : (
            <ArrowDownIcon />
          )}
        </div>
      </div>

      {isOpen && (
        <div className={styles.dropdownMenu} style={menuStyles}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
              style={textStyles}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
