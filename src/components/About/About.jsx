import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/com.png")}
          alt="computer desk"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/paint.png")} alt="paint icon"
            style={{width:"60Px", marginRight:"30px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm learn about frontend develop from class at university and learn more by myself.
                <br/>
                I like to work on frontend and this is my best in programming path.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/folder.png")} alt="folder icon"
            style={{width:"60Px", marginRight:"30px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Database</h3>
              <p>
                I have experience to optimize and mange the database.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/art.png")} alt="art icon"
            style={{width:"60Px", marginRight:"30px"}}/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple pages, website and have created design using Figma as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
