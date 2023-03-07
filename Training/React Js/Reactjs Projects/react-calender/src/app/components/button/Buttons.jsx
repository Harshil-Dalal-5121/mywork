import React from "react";

import styles from "./Buttons.module.css";

export const Buttons = ({ onClick, name }) => {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {name}
      </button>
    </>
  );
};

export default Buttons;
