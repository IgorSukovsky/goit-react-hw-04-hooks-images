import React from "react";
import style from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ urlWeb, urlLarge, showModalWindow }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => showModalWindow(urlLarge)}
    >
      <img src={urlWeb} alt="" className={style.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  urlWeb: PropTypes.string.isRequired,
  urlLarge: PropTypes.string.isRequired,
  showModalWindow: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
