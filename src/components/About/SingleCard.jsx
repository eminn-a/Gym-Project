import styles from "./AboutStyles.module.css";
import Yosif from "../../assets/Yosif.png";

export default function SingleCard() {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={Yosif} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>Yosif, the Grand Vizir</h4>
        <div className={styles.infoContainer}></div>
        <p>
          {" "}
          A senior official in the Ottoman Empire, often serving as an advisor
          or minister to the Sultan. The most senior Vizier was the Grand
          Vizier, who acted as the head of government and had broad executive
          powers, second only to the Sultan.
        </p>
      </div>
    </div>
  );
}
