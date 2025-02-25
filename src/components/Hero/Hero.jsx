import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I&lsquo;m Malachi</h1>
        <p className={styles.description}>
        I specialize in Data Science and Machine Learning, with experience building AI models to analyze and predict outcomes. Reach out if you&lsquo;d like to learn more!
        </p>
        <a href="mailto:mwmuhic@yahoo.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src={getImageUrl("assets/hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};