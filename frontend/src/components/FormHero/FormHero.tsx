import styles from "./styles.module.css";
import heroImage from "../../assets/images/hero-image.png";

export default function FormHero() {
  return (
    <div className={styles["hero"]}>
      <img src={heroImage} alt="Hero" width="559" height="415" className={styles["hero__image"]} />
      <h2 className={styles["hero__title"]}>
        Sign Up to name
      </h2>
      <p className={styles["hero__text"]}>
        Lorem Ipsum is simply
      </p>
    </div>
  )
}
