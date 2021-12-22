import React, { useEffect } from 'react';

import s from 'components/Modal/Modal.module.css';

import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal({ modalSource, modalDescription, onClose }) {
  useEffect(() => {
    const handleEscClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleOverlayClick}>
      <div className={s.Modal}>
        <img src={modalSource} alt={modalDescription} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  modalSource: PropTypes.string,
  modalDescription: PropTypes.string,
  onClose: PropTypes.func,
};

export { Modal };
