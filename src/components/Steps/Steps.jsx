import styles from "./StepsStyles.module.css";
import { steps } from "../../data/steps";
import StepsCard from "./StepsCard";

export default function Steps() {
  return (
    <div className={styles.steps}>
      {steps.map((x, index) => (
        <StepsCard key={index} data={x} />
      ))}
    </div>
  );
}
