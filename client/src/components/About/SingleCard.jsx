import styles from "./AboutStyles.module.css";
import Yosif from "../../assets/Yosif.png";

export default function SingleCard({ coach, index }) {
  const cardClass = index % 2 === 0 ? styles.tCard : styles.tCardReverse;
  return (
    <div className={cardClass}>
      <div className={styles.tImage}>
        <img src={coach.img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>
          {coach.name} {coach.lastName}
        </h4>
        <div className={styles.infoContainer}></div>
        <p>{coach.description}</p>
      </div>
    </div>
  );
}
