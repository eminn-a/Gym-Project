import { useMutation, useQueryClient } from "@tanstack/react-query";
import CommentModal from "../CommentModal/CommentModal";
import Comment from "./Comment";
import styles from "./MyCommentsStyles.module.css";
import { useContext, useEffect, useState } from "react";
import * as commentService from "../../services/commentService";
import toast from "react-hot-toast";
import Spiner from "../../components/shared/spiner/Spiner";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";
import { useInView } from "react-intersection-observer";
import { UserContext } from "../../context/authContext";

export default function MyComments({
  data,
  isLoading,
  error,
  fetchNextPage,
  hasNextPage,
}) {
  const [showModal, setShowModal] = useState(false);
  const queryClient = useQueryClient();
  const { userData } = useContext(UserContext);

  const toggleModal = () => setShowModal((prev) => !prev);
  const closeModal = () => setShowModal(false);

  const deleteCommentMutation = useMutation({
    mutationFn: (id) => commentService.deleteById(id),
    onSuccess: () => {
      queryClient.invalidateQueries("userComments");
      toast.success("Коментарът беше изтрит успешно.");
    },
    onError: (err) => {
      toast.error(`Грешка: ${err.message}`);
    },
  });

  const onDeleteHandler = (id, firstName, lastName) => {
    if (
      confirm(`Искате ли да изтриете коментара на ${firstName} ${lastName}?`)
    ) {
      deleteCommentMutation.mutate(id);
    }
  };

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);
  return (
    <>
      <CommentModal show={showModal} closeModal={closeModal} />
      <div className={styles.trip} id="testimonials">
        <div>
          <h1>
            <span className={styles.gradientText}>Отзиви</span>
          </h1>
          <p>Мнения на нашите клиенти</p>
          {userData && (
            <div onClick={toggleModal} className={styles.btn}>
              Напиши коментар
            </div>
          )}
        </div>

        {isLoading ? (
          <Spiner />
        ) : error ? (
          <ErrorMessage message={"Възникна грешка, моля опитайте по-късно!"} />
        ) : (
          <>
            <div className={styles.tripCardContainer}>
              {data.map((comment, index) => (
                <Comment
                  key={index}
                  data={comment}
                  onDelete={onDeleteHandler}
                />
              ))}
            </div>
            {hasNextPage && (
              <div ref={ref} className={styles.loadingIndicator}>
                <Spiner />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
