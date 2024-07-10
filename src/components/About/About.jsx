import styles from "./AboutStyles.module.css";
import SingleCard from "./SingleCard";

export default function About() {
  return (
    <div className={styles.trip}>
      <h1>GYM TRAINERS</h1>
      <p>Team Of Expert Coaches</p>
      <div className={styles.tripCardContainer}>
        <SingleCard />
      </div>
    </div>
  );
}
