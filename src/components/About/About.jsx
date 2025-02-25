import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("assets/about/chipeffect.png")}
          alt="Picture of a computer chip"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("")} alt="Cursor icon" className={styles.aboutpictures}/> */}
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                I&lsquo;ve designed, implemented, and documented predictive models to deliver data driven 
                decision making
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("")} alt="Server icon" className={styles.aboutpictures}/> */}
            <div className={styles.aboutItemText}>
            <h3>Data Analysis & Visualzation</h3>
              <p>
                I&lsquo;m skilled in exploritory data analysis, feature engineering, and data preprocessing
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("")} alt="UI icon" className={styles.aboutpictures}/> */}
            <div className={styles.aboutItemText}>
              <h3>Cloud Computing</h3>
              <p>
                I&lsquo;m in the process of exploring cloud computing and it&lsquo;s many capabilities
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};