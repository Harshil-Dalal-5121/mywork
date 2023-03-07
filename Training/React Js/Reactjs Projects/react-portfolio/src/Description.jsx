import React from "react";
import styles from "./Description.module.css";
const Description = () => {
  return (
    <>
      <h2>Hi, I am Harshil</h2>
      <p className={styles.discription}>
        Hello everybody. I'm Harshil, a free handsome bootstrap theme coded by
        BlackTie.co . A really simple theme for those wanting to showcase thier
        work with a cute & clean style.
      </p>
      <p className={styles.discription}>
        Please, consider to register to{" "}
        <a
          className={styles.newsletter}
          href="our newsletter"
          title="Our newsletter"
        >
          Our newsletter
        </a>
        to be updated with our latest themes and freebeis.Like always, you can
        use this theme in any project freely. Share it with your friends.
      </p>
    </>
  );
};

export default Description;
