import styles from "./StepsStyles.module.css";

export default function Steps() {
  return (
    <div className={styles.steps}>
      <div className={styles.box}>
        <i className="fa-solid fa-clock-rotate-left"></i>
        <h3>PROGRESSION</h3>
        <p>
          Our team of experts will work with you to create a customized plan
          that helps you achieve success one step at a time.
        </p>
      </div>
      <div className={styles.box}>
        <i className="fa-solid fa-dumbbell"></i>
        <h3>WORKOUT</h3>
        <p>
          With a variety of workouts to choose from, you'll have everything you
          need to get into the best shape of your life.
        </p>
      </div>
      <div className={styles.box}>
        <i className="fa-solid fa-list-check"></i>
        <h3>NUTRITIONS</h3>
        <p>
          Our team will work with you to create a personalized meal plan that
          helps you reach your specific health goals.
        </p>
      </div>
    </div>
  );
}
