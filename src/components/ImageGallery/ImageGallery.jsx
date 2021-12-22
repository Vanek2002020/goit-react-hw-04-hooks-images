import PropTypes from 'prop-types';

import s from 'components/ImageGallery/ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          source={webformatURL}
          description={tags}
          dataOriginal={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export { ImageGallery };
