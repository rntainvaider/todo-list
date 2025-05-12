import { useState } from "react";
import styles from "./styles.module.css";
import emailIcon from "../../assets/icons/email.svg";
import userIcon from "../../assets/icons/user.svg";
import lockIcon from "../../assets/icons/lock.svg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  return (
    <form className={styles["form"]}>
      <h2 className={styles["form__title"]}>
        Зарегистрироваться
      </h2>
      <p className={styles["form__text"]}>
        Если у вас уже есть учетная запись <br /> Вы можете
        <a href="#!" className={styles["form__login"]}>
          Войти здесь!
        </a>
      </p>
      <div className={styles["form__group"]}>
        <label className={styles["form__label"]}>
          Email
          <div className={styles["form__input-wrapper"]}>
            <img
              src={emailIcon}
              alt="Иконка email"
              width="17"
              height="17"
              className={styles["form__icon"]}
            />
            <input
              type="email"
              placeholder="Введите адрес электронной почты"
              className={styles["form__input"]}
            />
          </div>
        </label>
        <label className={styles["form__label"]}>
          Имя
          <div className={styles["form__input-wrapper"]}>
            <img
              src={userIcon}
              alt="Иконка email"
              width="17"
              height="17"
              className={styles["form__icon"]}
            />
            <input
              type="text"
              placeholder="Введите имя"
              className={styles["form__input"]}
            />
          </div>
        </label>
        <label className={styles["form__label"]}>
          Пароль
          <div className={styles["form__input-wrapper"]}>
            <img
              src={lockIcon}
              alt="Иконка email"
              width="17"
              height="17"
              className={styles["form__icon"]}
            />
            <input
              type="password"
              placeholder="Введите пароль"
              className={styles["form__input"]}
            />
          </div>
        </label>
        <label className={styles["form__label"]}>
          Повторите пароль
          <div className={styles["form__input-wrapper"]}>
            <img src={lockIcon}
              alt="Иконка email"
              width="17"
              height="17"
              className={styles["form__icon"]}
            />
            <input
              type="password"
              placeholder="Подтвердите пароль"
              className={styles["form__input"]}
            />
          </div>
        </label>
      </div>
      <button
        type="submit"
        className={styles["form__button"]}>
        Register
      </button>
    </form>
  )
}
