import styles from "./AboutStyles.module.css";
import SingleCard from "./SingleCard";

export default function About() {
  return (
    <div className={styles.trip}>
      <h1>Фитнес треньори</h1>
      <p>Екип от експертни треньори</p>
      <div className={styles.tripCardContainer}>
        <SingleCard />
      </div>
    </div>
  );
}
