import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ imageData, showModalWindow }) => {
  return (
    <ul className={style.ImageGallery}>
      {imageData.map((data, index) => (
        <ImageGalleryItem
          urlWeb={data.webformatURL}
          urlLarge={data.largeImageURL}
          showModalWindow={showModalWindow}
          key={data.id + index}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageData: PropTypes.array.isRequired,
  showModalWindow: PropTypes.func.isRequired,
};

export default ImageGallery;
