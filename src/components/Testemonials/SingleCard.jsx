import styles from "./TestemonialsStyles.module.css";

export default function SingleCard({ data, comment }) {
  return (
    <div className={styles.tCard} style={{ translate: `${-100 * comment}%` }}>
      <div className={styles.tImage}>
        <img src={data.img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <i className="fa-regular fa-comment"></i>
        <div className={styles.infoContainer}></div>
        <p>{data.description}</p>
        <h4>{`${data.firstName} ${data.lastName}`}</h4>
      </div>
    </div>
  );
}
