import styles from "./AboutStyles.module.css";
import SingleCard from "./SingleCard";

export default function About({ coaches }) {
  return (
    <div className={styles.trip} id="about">
      <h1>
        <span className={styles.gradientText}>Фитнес треньори</span>
      </h1>
      <p>Екип от експертни треньори</p>
      <div className={styles.tripCardContainer}>
        {coaches.map((x, index) => (
          <SingleCard coach={x} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
