import React, { useState } from 'react';
import PropTypes from 'prop-types';

import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

import { Modal } from 'components/Modal/Modal';

function ImageGalleryItem({ id, source, description, dataOriginal }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <li key={id} className={s.ImageGalleryItem} onClick={toggleModal}>
        <img
          src={source}
          alt={description}
          className={s.ImageGalleryItem__image}
        />
      </li>
      {showModal && (
        <Modal
          modalSource={dataOriginal}
          modalDescription={description}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  dataOriginal: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  source: PropTypes.string,
  description: PropTypes.string,
};

export { ImageGalleryItem };
