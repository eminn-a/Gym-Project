import styles from "./HeroStyles.module.css";

export default function Navbar() {
  return (
    <div className={styles.hero}>
      <img
        // src="https://images.pexels.com/photos/136410/pexels-photo-136410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src="https://images.pexels.com/photos/949132/pexels-photo-949132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="HeroImg"
      />
      <div className={styles.heroText}>
        <p>Fosif Gym</p>
        <h1>MAKE YOUR BODY AND MIND</h1>
        <p>Fit & Perfect</p>
        {/* <div className={styles.heroBtn}>Check Classes</div> */}
      </div>
    </div>
  );
}
