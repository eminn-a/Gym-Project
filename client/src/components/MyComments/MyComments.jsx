import CommentModal from "../CommentModal/CommentModal";
import Comment from "./Comment";
import styles from "./MyCommentsStyles.module.css";
import { useEffect, useState } from "react";

export default function Mycomments({ comments }) {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <CommentModal show={showModal} closeModal={closeModal} />
      <div className={styles.trip} id="testemonials">
        <div>
          <h1>
            <span className={styles.gradientText}>Отзиви</span>
          </h1>
          <p>Мнения на нашите клиенти</p>
          <div onClick={toggle} className={styles.btn}>
            Напиши коментар
          </div>
        </div>
        <div className={styles.tripCardContainer}>
          {comments?.map((x, index) => (
            <Comment key={index} data={x} />
          ))}
        </div>
      </div>
    </>
  );
}
