import styles from "./styles.module.css";
import FormSignUp from "../../components/FormSignUp/FormSignUp";
import FormHero from "../../components/FormHero/FormHero";

export default function PageSignUp() {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <FormSignUp />
        <FormHero />
      </div>
    </div>
  )
}
