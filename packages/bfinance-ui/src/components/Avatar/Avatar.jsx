import React from 'react';

import { User3Line } from '@bfinance/icons'
import emptyAvatarIcon from '../../assets/icons/emptyAvatar.svg';

import styles from './styles.module.css';

const Avatar = ({
  type = 'initials', // initials, userpic, icon, empty
  color = 'grey', // grey, blue, green, orange, red, purple, brand (initials, icon)
  theme = 'subtle', // subtle, accent (initials, icon)
  size = 'md', // xs, sm, md, lg, xl, 2xl
  initials = '',
  src,
  alt = 'avatar',
  status = false,
  notification = false,
  className = '',
}) => {
  const isInitials = type === 'initials';
  const isUserpic = type === 'userpic' && Boolean(src);
  const isIcon = type === 'icon';
  const isEmpty = !isInitials && !isUserpic && !isIcon;
  const isColored = isInitials || isIcon;

  return (
    <div
      className={[styles.wrapper, styles[`size-${size}`], className]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={[
          styles.circle,
          isColored && styles[color],
          isColored && styles[theme],
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {isInitials && <span className={styles.initials}>{initials}</span>}
        {isUserpic && <img src={src} alt={alt} className={styles.image} />}
        {isIcon && <User3Line className={styles.icon} />}
        {isEmpty && <img src={emptyAvatarIcon} alt={alt} className={styles.image} />}
      </div>

      {notification && (
        <span className={`${styles.dot} ${styles.notificationDot}`} />
      )}
      {status && (
        <span className={`${styles.dot} ${styles.statusDot}`} />
      )}
    </div>
  );
};

export default Avatar;
