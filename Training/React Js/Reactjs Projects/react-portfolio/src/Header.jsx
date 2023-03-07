import React from "react";
import styles from "./Header.module.css";
import NavLinks from "./NavLinks";

const Header = () => {
  console.log(styles);
  return (
    <>
      <div className={styles.header}>
        <div className="name" title="Harshil">
          Harshil
        </div>
        <NavLinks />
      </div>
    </>
  );
};
export default Header;
