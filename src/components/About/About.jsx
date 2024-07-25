import styles from "./AboutStyles.module.css";
import SingleCard from "./SingleCard";

export default function About() {
  return (
    <div className={styles.trip}>
      <h1>
        <span className={styles.gradientText}>Фитнес треньори</span>
      </h1>
      <p>Екип от експертни треньори</p>
      <div className={styles.tripCardContainer}>
        <SingleCard />
      </div>
    </div>
  );
}
