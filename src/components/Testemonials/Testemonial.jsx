import SingleCard from "./SingleCard";
import styles from "./TestemonialsStyles.module.css";

export default function Testemonials() {
  return (
    <div className={styles.trip}>
      <div>
        <h1>Нашите клиенти</h1>
        <p>Екип от експертни треньори</p>
      </div>
      <div className={styles.tripCardContainer}>
        <SingleCard />
      </div>
    </div>
  );
}
