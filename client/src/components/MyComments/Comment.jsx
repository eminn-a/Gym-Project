import styles from "./MyCommentsStyles.module.css";

export default function Comment({ data, onDelete }) {
  return (
    <div className={styles.tCard}>
      <div className={styles.tImage}>
        <img src={data.img} alt="" />
      </div>
      <div className={styles.sTripText}>
        <i className="fa-regular fa-comment"></i>
        <div className={styles.infoContainer}></div>
        <p>{data.description}</p>
        <h4>{`${data.firstName} ${data.lastName}`}</h4>
        <div className={styles.buttons}>
          <div className={styles.editBtn}>Edit</div>
          <div
            className={styles.deleteBtn}
            onClick={() => onDelete(data._id, data.firstName, data.lastName)}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}
