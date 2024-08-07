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
        <i className="fa-regular fa-comment"></i>
        <div className={styles.infoContainer}></div>
        <p>
          Йосиф е отличен фитнес треньор. Той е знаещ, подкрепящ и винаги ме
          мотивира да давам най-доброто от себе си. Благодарение на неговите
          насоки виждам големи подобрения в моята физическа форма.
        </p>
        <h4>Моника Белучи</h4>
      </div>
    </div>
  );
}
