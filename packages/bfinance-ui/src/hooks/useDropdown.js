import { useState, useRef, useEffect, useCallback } from 'react';

const positionClassMap = { down: 'menuDown', up: 'menuUp' };

/**
 * @param {object} params
 * @param {Array}    params.options
 * @param {string}   params.position      - down, up
 * @param {string}   params.width
 * @param {string}   [params.menuWidth]
 * @param {Function} [params.onOpen]
 * @param {Function} params.onKeySelect   - called when Enter/Space
 */
function useDropdown({ options, position, width, menuWidth, onOpen, onKeySelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const menuPosClass = positionClassMap[String(position || 'down').toLowerCase()] ?? positionClassMap.down;

  const openDropdown = useCallback((initialIndex = 0) => {
    setIsOpen(true);
    setFocusedIndex(initialIndex);
    onOpen?.();
  }, [onOpen]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setFocusedIndex(-1);
    buttonRef.current?.focus();
  }, []);

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
        if (focusedIndex >= 0 && focusedIndex < options.length)
          onKeySelect(options[focusedIndex]);
        break;
      case 'Escape':
        event.preventDefault();
        closeDropdown();
        break;
      case 'Tab':
        closeDropdown();
        break;
    }
  }, [isOpen, focusedIndex, options, openDropdown, closeDropdown, onKeySelect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonStyle = { width: width ?? 'auto' };
  const menuStyle = { width: menuWidth ?? width ?? 'auto' };

  return {
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
  };
}

export default useDropdown;
