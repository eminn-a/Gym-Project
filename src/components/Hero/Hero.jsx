import styles from "./HeroStyles.module.css";

export default function Navbar() {
  return (
    <div className={styles.hero}>
      <div className={styles.leftH}></div>
      <div className={styles.rightH}></div>
    </div>
  );
}
