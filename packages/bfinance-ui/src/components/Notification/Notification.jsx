import React, { useEffect, useState } from 'react';
import { CloseLine, InformationFill } from '@bfinance/icons';

import { Button } from '../Button';

import styles from './styles.module.css';

const Notification = ({
  status = 'info',       // 'info' | success' | 'destructive' | 'warning' 
  size = 'md',           // 'sm' | 'md'
  title = '',
  description = '',
  onClose,
  open = true,
  autoHideDuration,      // ms, e.g. 3000
  actions,               // [{ label: string, variant: 'primary' | 'secondary', onClick: fn }]
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    if (!visible || !autoHideDuration) return;
    const timer = setTimeout(() => handleClose(), autoHideDuration);
    return () => clearTimeout(timer);
  }, [visible, autoHideDuration]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  const notificationClasses = [
    styles.notification,
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={notificationClasses} role="alert" {...props}>
      <div className={styles.header}>
        <div className={[styles.titleGroup, styles[`titleGroup_${size}`]].filter(Boolean).join(' ')}>
          <span className={[styles.statusIcon, styles[`icon_${status}`]].filter(Boolean).join(' ')}>
            <InformationFill />
          </span>
          <span className={styles.title}>{title}</span>
        </div>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close notification">
          <CloseLine />
        </button>
      </div>

      {size === 'md' && description && (
        <p className={styles.description}>{description}</p>
      )}

      {size === 'md' && actions && actions.length > 0 && (
        <div className={styles.actions}>
          {actions.map((action, i) => (
            <Button
              size="xs"
              shape="rounded"
              key={i}
              variant={action.variant}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
