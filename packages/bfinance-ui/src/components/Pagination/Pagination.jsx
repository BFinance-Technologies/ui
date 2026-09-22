import React, { useCallback, useMemo, useRef } from 'react'
import { ArrowLeftLine, ArrowRightLine, ArrowDownSLine } from '@bfinance/icons'
import useDropdown from '../../hooks/useDropdown'
import styles from './styles.module.css'

const range = (start, end) => {
  const out = []
  for (let i = start; i <= end; i++) out.push(i)
  return out
}

const getPageItems = (page, totalPages, siblingCount = 1, boundaryCount = 1) => {
  const totalPageNumbers = boundaryCount * 2 + siblingCount * 2 + 3

  if (totalPages <= totalPageNumbers) return range(1, totalPages)

  const leftSiblingIndex = Math.max(page - siblingCount, boundaryCount + 2)
  const rightSiblingIndex = Math.min(page + siblingCount, totalPages - boundaryCount - 1)

  const showLeftEllipsis = leftSiblingIndex > boundaryCount + 2
  const showRightEllipsis = rightSiblingIndex < totalPages - boundaryCount - 1

  const items = [...range(1, boundaryCount)]

  if (showLeftEllipsis) items.push('...')
  else items.push(...range(boundaryCount + 1, leftSiblingIndex - 1))

  items.push(...range(leftSiblingIndex, rightSiblingIndex))

  if (showRightEllipsis) items.push('...')
  else items.push(...range(rightSiblingIndex + 1, totalPages - boundaryCount))

  items.push(...range(totalPages - boundaryCount + 1, totalPages))

  return items
}

const formatNumber = (value) => value.toLocaleString('en-US')

// Sliding 7-slot "worm" window — mirrors the Figma _Dots set (Quantity: 6 or less / 6+, Progress: Start / End).
const getDotSlots = (activeIndex, totalCount) => {
  if (totalCount <= 6) {
    return Array.from({ length: totalCount }, (_, index) => ({
      size: 6,
      active: index === activeIndex,
    }))
  }

  const atStart = activeIndex <= 3
  const atEnd = activeIndex >= totalCount - 4

  let slotActiveIndex
  let sizes
  if (atStart) {
    slotActiveIndex = activeIndex
    sizes = [6, 6, 6, 6, 6, 4, 3]
  } else if (atEnd) {
    slotActiveIndex = 6 - (totalCount - 1 - activeIndex)
    sizes = [3, 4, 6, 6, 6, 6, 6]
  } else {
    slotActiveIndex = 3
    sizes = [3, 4, 6, 6, 6, 4, 3]
  }

  return sizes.map((size, index) => ({ size, active: index === slotActiveIndex }))
}

const dotSizeClass = {
  3: 'dotSize3',
  4: 'dotSize4',
}

const Dots = ({ activeIndex, totalCount }) => (
  <div className={styles.dots}>
    {getDotSlots(activeIndex, totalCount).map((slot, index) => (
      <span
        key={index}
        className={[
          styles.dot,
          dotSizeClass[slot.size] && styles[dotSizeClass[slot.size]],
          slot.active && styles.dotActive,
        ].filter(Boolean).join(' ')}
      />
    ))}
  </div>
)

const Pagination = ({
  type = 'arrows', // arrows, buttons, numbers
  size = 'md', // md, sm
  page = 1,
  totalPages = 1,
  onPageChange,
  disabled = false,
  showDots = true, // arrows, buttons only
  dotsCount, // arrows, buttons only — defaults to totalPages; renders as a sliding window past 6
  previousLabel = 'Previous',
  nextLabel = 'Next',
  siblingCount = 1,
  boundaryCount = 1,
  totalItems, // numbers/md only
  pageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  rowsPerPageLabel = 'Rows per page',
  rowsPerPagePosition = 'down',
  showItemsCount = true, // numbers/md only
  showRowsPerPage = true, // numbers/md only
  className,
  ...props
}) => {
  const isFirst = page <= 1
  const isLast = page >= totalPages

  const handlePrev = useCallback(() => {
    if (disabled || isFirst) return
    onPageChange?.(page - 1)
  }, [disabled, isFirst, onPageChange, page])

  const handleNext = useCallback(() => {
    if (disabled || isLast) return
    onPageChange?.(page + 1)
  }, [disabled, isLast, onPageChange, page])

  const resolvedDotsCount = dotsCount ?? Math.max(totalPages, 1)
  const activeDotIndex = resolvedDotsCount > 0
    ? Math.min(Math.max(page - 1, 0), resolvedDotsCount - 1)
    : 0

  const pageItems = useMemo(
    () => getPageItems(page, totalPages, siblingCount, boundaryCount),
    [page, totalPages, siblingCount, boundaryCount]
  )

  const pageSizeOptionObjects = useMemo(
    () => pageSizeOptions.map((value) => ({ label: String(value), value })),
    [pageSizeOptions]
  )

  const onKeySelectRef = useRef(null)

  const rowsDropdown = useDropdown({
    options: pageSizeOptionObjects,
    position: rowsPerPagePosition,
    width: 'auto',
    onKeySelect: useCallback((option) => onKeySelectRef.current?.(option), []),
  })

  const handlePageSizeSelect = useCallback((option) => {
    rowsDropdown.closeDropdown()
    onPageSizeChange?.(option.value)
  }, [rowsDropdown, onPageSizeChange])

  onKeySelectRef.current = handlePageSizeSelect

  const toggleRowsDropdown = () => {
    if (rowsDropdown.isOpen) {
      rowsDropdown.closeDropdown()
      return
    }
    const selectedIndex = pageSizeOptionObjects.findIndex((option) => option.value === pageSize)
    rowsDropdown.openDropdown(selectedIndex >= 0 ? selectedIndex : 0)
  }

  const isArrows = type === 'arrows'
  const isButtons = type === 'buttons'
  const isNumbersSm = type === 'numbers' && size === 'sm'
  const isNumbersMd = type === 'numbers' && size === 'md'

  const rangeStart = totalItems === 0 ? 0 : (page - 1) * pageSize + 1
  const rangeEnd = typeof totalItems === 'number' ? Math.min(page * pageSize, totalItems) : page * pageSize

  const rootClasses = [styles.pagination, styles[type], styles[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} {...props}>
      {isArrows && (
        <>
          <button
            type="button"
            className={styles.iconCircle}
            onClick={handlePrev}
            disabled={disabled || isFirst}
            aria-label={previousLabel}
          >
            <ArrowLeftLine />
          </button>
          {showDots && <Dots activeIndex={activeDotIndex} totalCount={resolvedDotsCount} />}
          <button
            type="button"
            className={styles.iconCircle}
            onClick={handleNext}
            disabled={disabled || isLast}
            aria-label={nextLabel}
          >
            <ArrowRightLine />
          </button>
        </>
      )}

      {isButtons && (
        <>
          <div className={styles.buttonSlot} data-align="start">
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={handlePrev}
              disabled={disabled || isFirst}
            >
              {previousLabel}
            </button>
          </div>
          {showDots && <Dots activeIndex={activeDotIndex} totalCount={resolvedDotsCount} />}
          <div className={styles.buttonSlot} data-align="end">
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={handleNext}
              disabled={disabled || isLast}
            >
              {nextLabel}
            </button>
          </div>
        </>
      )}

      {isNumbersSm && (
        <>
          <button
            type="button"
            className={styles.ghostArrow}
            onClick={handlePrev}
            disabled={disabled || isFirst}
            aria-label={previousLabel}
          >
            <ArrowLeftLine />
          </button>
          {pageItems.map((item, index) =>
            item === '...' ? (
              <span key={`ellipsis-${index}`} className={`${styles.number} ${styles.ellipsis}`}>
                ...
              </span>
            ) : (
              <button
                key={item}
                type="button"
                className={`${styles.number} ${item === page ? styles.numberActive : ''}`}
                onClick={() => onPageChange?.(item)}
                disabled={disabled}
                aria-current={item === page ? 'page' : undefined}
              >
                {item}
              </button>
            )
          )}
          <button
            type="button"
            className={styles.ghostArrow}
            onClick={handleNext}
            disabled={disabled || isLast}
            aria-label={nextLabel}
          >
            <ArrowRightLine />
          </button>
        </>
      )}

      {isNumbersMd && (
        <>
          {showItemsCount && typeof totalItems === 'number' && (
            <p className={styles.itemsCount}>
              {`${formatNumber(rangeStart)}-${formatNumber(rangeEnd)} of ${formatNumber(totalItems)} items`}
            </p>
          )}
          <div className={styles.numbersRow}>
            <button
              type="button"
              className={styles.textButton}
              onClick={handlePrev}
              disabled={disabled || isFirst}
            >
              <ArrowLeftLine />
              <span>{previousLabel}</span>
            </button>
            {pageItems.map((item, index) =>
              item === '...' ? (
                <span key={`ellipsis-${index}`} className={`${styles.number} ${styles.ellipsis}`}>
                  ...
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  className={`${styles.number} ${item === page ? styles.numberActive : ''}`}
                  onClick={() => onPageChange?.(item)}
                  disabled={disabled}
                  aria-current={item === page ? 'page' : undefined}
                >
                  {item}
                </button>
              )
            )}
            <button
              type="button"
              className={styles.textButton}
              onClick={handleNext}
              disabled={disabled || isLast}
            >
              <span>{nextLabel}</span>
              <ArrowRightLine />
            </button>
          </div>
          {showRowsPerPage && (
            <div
              className={styles.rowsPerPage}
              ref={rowsDropdown.dropdownRef}
              onKeyDown={disabled ? undefined : rowsDropdown.handleKeyDown}
            >
              <span className={styles.rowsPerPageLabel}>{rowsPerPageLabel}</span>
              <div className={styles.rowsDropdownWrap}>
                <button
                  type="button"
                  ref={rowsDropdown.buttonRef}
                  className={styles.rowsDropdownButton}
                  onClick={toggleRowsDropdown}
                  disabled={disabled}
                  aria-haspopup="listbox"
                  aria-expanded={rowsDropdown.isOpen}
                >
                  <span>{pageSize}</span>
                  <span className={`${styles.rowsDropdownIcon} ${rowsDropdown.isOpen ? styles.rotated : ''}`}>
                    <ArrowDownSLine />
                  </span>
                </button>
                {rowsDropdown.isOpen && (
                  <div
                    role="listbox"
                    className={`${styles.rowsDropdownMenu} ${styles[rowsDropdown.menuPosClass]}`}
                  >
                    {pageSizeOptionObjects.map((option, index) => {
                      const isSelected = option.value === pageSize
                      const isFocused = rowsDropdown.focusedIndex === index
                      return (
                        <div
                          key={option.value}
                          role="option"
                          aria-selected={isSelected}
                          className={[
                            styles.rowsDropdownItem,
                            isSelected && styles.rowsDropdownItemSelected,
                            isFocused && styles.rowsDropdownItemFocused,
                          ].filter(Boolean).join(' ')}
                          onClick={() => handlePageSizeSelect(option)}
                          onMouseEnter={() => rowsDropdown.setFocusedIndex(index)}
                        >
                          {option.label}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Pagination
