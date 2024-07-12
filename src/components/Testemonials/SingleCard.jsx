import styles from "./TestemonialsStyles.module.css";
import Yosif from "../../assets/Yosif.png";

export default function SingleCard() {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img
          src="https://images.pexels.com/photos/16358993/pexels-photo-16358993/free-photo-of-photo-of-a-young-woman-in-a-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className={styles.sTripText}>
        <i class="fa-regular fa-comment"></i>
        <div className={styles.infoContainer}></div>
        <p>
          „Член съм на Pasha Gym от последните 6 месеца и това беше невероятно
          преживяване. Треньорите са знаещи и подкрепящи, оборудването е
          първокласно, а общността на членовете е приятелска и насърчаваща.“
        </p>
        <h4>Памела Андерсън</h4>
      </div>
    </div>
  );
}
