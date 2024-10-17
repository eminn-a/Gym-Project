import styles from "./MyCommentsStyles.module.css";
import CommentModal from "../CommentModal/CommentModal";
import { useContext, useState } from "react";
import { UserContext } from "../../context/authContext";

export default function Comment({ data, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, userData } = useContext(UserContext);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  const isOwner = data._ownerId === userData?._id;

  return (
    <>
      <CommentModal show={showModal} closeModal={closeModal} editData={data} />
      <div className={styles.tCard}>
        <div className={styles.tImage}>
          <img src={data.img} alt="" />
        </div>
        <div className={styles.sTripText}>
          <i className="fa-regular fa-comment"></i>
          <div className={styles.infoContainer}></div>
          <p>{data.description}</p>
          <h4>{`${data.firstName} ${data.lastName}`}</h4>

          {(isAdmin || isOwner) && (
            <div className={styles.buttons}>
              <div className={styles.editBtn} onClick={toggle}>
                Edit
              </div>
              <div
                className={styles.deleteBtn}
                onClick={() =>
                  onDelete(data._id, data.firstName, data.lastName)
                }
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
