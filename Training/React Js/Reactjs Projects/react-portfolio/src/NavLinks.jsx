import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <>
      <ul className={styles.list}>
        <a href="work" title="Work">
          <li className={styles.listitem}>Work</li>
        </a>
        <a href="About" title="About">
          <li className={styles.listitem}>About</li>
        </a>
        <a href="Blog" title="Blog">
          <li className={styles.listitem}>Blog</li>
        </a>
        <a href="Contact" title="Contact">
          <li className={styles.listitem}>Contact</li>
        </a>
      </ul>
    </>
  );
};
export default NavLinks;
