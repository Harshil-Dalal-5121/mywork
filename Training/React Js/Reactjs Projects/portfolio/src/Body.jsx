import React from "react";
import styles from "./Body.modules.css";
import Description from "./Description";
import Logo from "./Logo";

const Body = () => {
  console.log(styles);
  return (
    <>
      <section className={styles.section}>
        <Logo />
        <Description />
      </section>
    </>
  );
};

export default Body;
