import React, { useState } from 'react';
import styles from './styles.module.css';

const Tooltip = ({
  tip = 'bottomLeft', // bottomLeft, bottomRight, bottomCenter, topLeft, topRight, topCenter, leftSide, rightSide
  size = 'sm', // sm, md, lg
  children,
  text = '',
  headline = '', // only for size lg
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const bubble = (
    <div
      className={`${styles.tooltip} ${styles[size]} ${styles[tip]} ${
        isVisible ? styles.visible : ''
      }`}
      role="status"
      aria-hidden={!isVisible}
    >
      {size === 'lg' &&
       <>
        <span className={styles.headline}>{headline}</span>
        <div className={`${styles.text} ${styles.headline}`}>{text}</div>
       </>
      }
      {size !== 'lg' && <span className={styles.text}>{text}</span>}
    </div>
  );

  if (!children) return bubble;

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {bubble}
    </div>
  );
};

export default Tooltip;
