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
          <img src={getImageUrl("assets/contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">mwmuhic@yahoo.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("assets/contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/malachi-muhic">linkedin.com/malachi-muhic</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("assets/contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/malachimuhic">github.com/malachimuhic</a>
        </li>
      </ul>
    </footer>
  );
};