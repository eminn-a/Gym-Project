import styles from "./ClassesStyles.module.css";
import ClassesCard from "./ClassesCard";

export default function Classes({ programsData }) {
  return (
    <div className={styles.section} id="classes">
      <h1>
        <span className={styles.gradientText}>Нашите програми</span>
      </h1>
      <p>Разнообразие от всякакъв вид програми</p>
      <div className={styles.container}>
        {programsData.map((x, index) => (
          <ClassesCard key={index} data={x} />
        ))}
      </div>
    </div>
  );
}
