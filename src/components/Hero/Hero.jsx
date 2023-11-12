import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kade :)</h1>
        <p className={styles.description}>
          I'm a 4th years Electronics Engineering Technology (Computer) student,
          <br/>
          This is my portfolio to show you about my programming skills.
          <br/>
          Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/1mcF9weYcnmtlNQuzR1IQnNIpXT0K2qY_/view?usp=sharing" 
        className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/workingoncomputer.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
