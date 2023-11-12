import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img height={"50px"} src={getImageUrl("contact/email.png")} alt="Email icon" />
          <a href="mailto:kadsiriwan@email.com">kadsiriwan@email.com</a>
        </li>
        <li className={styles.link}>
          <img height={"50px"} src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/kkadd">github.com/kkadd</a>
        </li>
      </ul>
    </footer>
  );
};
