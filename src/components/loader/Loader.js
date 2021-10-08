import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const LoaderComponent = () => {
  return (
    <Loader
      key="key"
      className={styles.spinner}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
    />
  );
};

export default LoaderComponent;
