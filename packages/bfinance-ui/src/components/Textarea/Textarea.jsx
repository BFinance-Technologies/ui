import React, { useState } from 'react';
import { InformationLine, InformationFill, CloseLine } from '@bfinance/icons';

import {Tooltip} from '../Tooltip';
import {Button} from '../Button';

import styles from './styles.module.css';


const Textarea = ({
  label = '',
  helperText = '',
  optionalText = '',
  tooltipText = '',
  submitText = '',
  placeholder = '',
  onSubmit,
  required = false,
  disabled = false,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const handleSubmit = () => {
    onSubmit?.(value);
    setValue('');
  };

  return (
    <div className={`${styles.wrapper}`}>
      {label && (
        <div className={styles.labelRow}>
          <span className={styles.label}>{label}</span>
          {optionalText && <span className={styles.optional}>{optionalText}</span>}
          {required && <span className={styles.required}>*</span>}
          {tooltipText && (
            <Tooltip text={tooltipText} tip="bottomCenter" size="sm">
              <span className={styles.infoIconWrapper}>
                <InformationFill />
              </span>
            </Tooltip>
          )}
        </div>
      )}

      <div className={`${styles.textareaContainer} ${disabled ? styles.containerDisabled : ''}`}>
        <textarea
          placeholder={placeholder}
          className={styles.textarea}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {value.length > 0 && !disabled && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear"
          >
            <CloseLine />
          </button>
        )}
      </div>

      {(helperText || submitText) && (
        <div className={`${styles.footer} ${!helperText ? styles.footerNoHelper : ''}`}>
          {helperText && (
            <span className={styles.helperText}>
              <InformationLine />
              {helperText}
            </span>
          )}
          {submitText && (
            <Button
              variant="secondary"
              size="sm"
              shape="rounded"
              mode="default"
              onClick={handleSubmit}
              disabled={disabled || value.length === 0}
            >
              {submitText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Textarea;
