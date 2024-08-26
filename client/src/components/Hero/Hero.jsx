import styles from "./HeroStyles.module.css";

export default function Navbar({ heroData }) {
  return (
    <div className={styles.hero} id="hero">
      <img src={heroData.img} alt="HeroImg" />
      <div className={styles.heroText}>
        <h1>{heroData.title}</h1>
        <h1>
          <span className={styles.gradientText}>{heroData.logoText}</span>
        </h1>
      </div>
    </div>
  );
}
