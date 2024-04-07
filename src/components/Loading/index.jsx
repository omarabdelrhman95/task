import React from "react";
import styles from "./loader.module.css";

const Loading = () => {
  return (
    <div className={styles.page}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
