import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

const ArrowDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Dropdown = ({
  title = 'Select',
  options = [],
  onSelect,
  onOpen,
  position = 'DownLeft',
  width = 'auto',
  menuWidth = 'auto',
  icon = <ArrowDownIcon />,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const normalizedPos = String(position || 'DownLeft');
  const positionClassMap = {
    downLeft: 'menuDownLeft',
    downRight: 'menuDownRight',
    upLeft: 'menuUpLeft',
    upRight: 'menuUpRight',
  };
  const menuPosClass = positionClassMap[normalizedPos] || positionClassMap.DownLeft;

  const toggleDropdown = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    // Вызываем onOpen при открытии dropdown
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

  // Close dropdown when clicking outside
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
  };

  const menuStyles = {
    width: menuWidth,
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div
        className={styles.dropdownToggle}
        style={dropdownStyles}
        onClick={toggleDropdown}
      >
        <span className={styles.dropdownTitle}>
          {selectedOption ? selectedOption.label : title}
        </span>
        <div 
          className={`${styles.dropdownIcon} 
          ${isOpen ? styles.rotated : ''}`}
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
        <div className={`${styles.dropdownMenu} ${styles[menuPosClass]}`} style={menuStyles}>
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className={`${styles.dropdownItem}`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
