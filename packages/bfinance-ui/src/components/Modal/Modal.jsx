import React, { useEffect } from 'react'
import styles from './styles.module.css'

const Modal = ({
    children,
    padding = '16px',
    width = 'auto',
    height = 'auto',
    gap = '16px',
    background = '#FFF',
    className = '',
    isOpen = true,
    onClose = () => { },
    closeOnOverlayClick = true,
    ...props
}) => {
    const modalStyle = {
        padding,
        width,
        height,
        gap,
        background
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget && closeOnOverlayClick) {
            onClose();
        }
    };

    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div
                className={`${styles.modal} ${className}`}
                style={modalStyle}
                {...props}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal