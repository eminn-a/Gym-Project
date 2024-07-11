import styles from "./StepsStyles.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.box}>
        <i className="fa-solid fa-clock-rotate-left"></i>
        <h3>ПРОГРЕС</h3>
        <p>
          Нашият екип от експерти ще работи с вас, за да създаде персонализиран
          план, който ще ви помогне да постигнете успех стъпка по стъпка.
        </p>
      </div>
      <div className={styles.box}>
        <i className="fa-solid fa-dumbbell"></i>
        <h3>ТРЕНИРОВКИ</h3>
        <p>
          С разнообразие от тренировки, от които да избирате, ще имате всичко
          необходимо, за да влезете в най-добрата форма на живота си.
        </p>
      </div>
      <div className={styles.box}>
        <i className="fa-solid fa-list-check"></i>
        <h3>ХРАНИТЕЛНИ ПРОГРАМИ</h3>
        <p>
          Нашият екип ще работи с вас, за да създаде персонализиран хранителен
          план, който ще ви помогне да постигнете вашите конкретни здравни цели.
        </p>
      </div>
    </div>
  );
}
