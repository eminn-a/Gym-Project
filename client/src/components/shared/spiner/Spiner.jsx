import styles from "./SpinerStyles.module.css";

export default function Spiner() {
  return (
    <div className={styles.spinerWrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}
