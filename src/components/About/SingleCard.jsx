import styles from "./AboutStyles.module.css";
import Yosif from "../../assets/Yosif.png";

export default function SingleCard() {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={Yosif} alt="" />
      </div>
      <div className={styles.sTripText}>
        <h4>Йосиф Хаджиев</h4>
        <div className={styles.infoContainer}></div>
        <p>
          Този треньор е специализиран в разнообразни фитнес дисциплини,
          включително функционални тренировки, HIIT (високоинтензивна интервална
          тренировка) и силови тренировки, както и създаване на персонализирани
          хранителни планове. С опит в разработването на комплексни тренировки и
          диетични стратегии, той съчетава техники от различни области, за да
          осигури цялостен подход към фитнес и здраве.
        </p>
      </div>
    </div>
  );
}
