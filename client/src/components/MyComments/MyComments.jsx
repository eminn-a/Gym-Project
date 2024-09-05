import { useMutation, useQueryClient } from "@tanstack/react-query";
import CommentModal from "../CommentModal/CommentModal";
import Comment from "./Comment";
import styles from "./MyCommentsStyles.module.css";
import { useEffect, useState } from "react";
import * as commentService from "../../services/commentService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Mycomments({ comments }) {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const closeModal = () => {
    setShowModal(false);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  const deleteCommentMutation = useMutation({
    mutationFn: (id) => commentService.deleteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries("userComments");
      toast.success("Изтрихте коментар");
      navigate("/comments");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onDeleteHandler = (id, firstName, lastName) => {
    if (confirm(`Искате да изтриете коментарa на ${firstName} ${lastName}?`)) {
      deleteCommentMutation.mutate(id);
    }
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
            <Comment key={index} data={x} onDelete={onDeleteHandler} />
          ))}
        </div>
      </div>
    </>
  );
}
