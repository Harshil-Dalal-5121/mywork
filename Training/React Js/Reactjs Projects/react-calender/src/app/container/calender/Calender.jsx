import React from "react";

import CalenderBody from "../../components/calender-body/CalenderBody";
import CalenderHeader from "../../components/calender-header/CalenderHeader";

import styles from "./Calender.module.css";

export const Calender = () => {
  return (
    <>
      <table className={styles.table}>
        <CalenderHeader />
        <CalenderBody />
      </table>
    </>
  );
};

export default Calender;
