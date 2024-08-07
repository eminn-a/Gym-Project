import styles from "./ClassesStyles.module.css";
import { programsData } from "../../data/programsData";
import ClassesCard from "./ClassesCard";

export default function Classes() {
  return (
    <div className={styles.section} id="classes">
      <h1>
        <span className={styles.gradientText}>Нашите програми</span>
      </h1>
      <div className={styles.container}>
        {programsData.map((x, index) => (
          <ClassesCard key={index} data={x} />
        ))}
      </div>
    </div>
  );
}
