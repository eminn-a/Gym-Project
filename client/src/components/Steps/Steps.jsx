import styles from "./StepsStyles.module.css";
import StepsCard from "./StepsCard";

export default function Steps({ steps }) {
  return (
    <div className={styles.steps}>
      {steps.map((x, index) => (
        <StepsCard key={index} data={x} />
      ))}
    </div>
  );
}
