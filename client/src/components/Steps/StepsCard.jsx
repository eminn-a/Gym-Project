import styles from "./StepsStyles.module.css";

export default function StepsCard({ data }) {
  return (
    <div className={styles.box}>
      <i className={data.icon}></i>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
}
