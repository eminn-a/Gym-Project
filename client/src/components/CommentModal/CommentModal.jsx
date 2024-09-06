import styles from "./CommentModalStyles.module.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as commentService from "../../services/commentService";
import { commentValidator } from "../../validation/commentValidator";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CommentModal = ({ show, closeModal, editData }) => {
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const validationSchema = commentValidator();

  const handleOuterClick = () => {
    closeModal();
    setShowPassword(false);
    setShowRePassword(false);
    setRegistered(false);
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: editData
      ? {
          firstName: editData.firstName,
          lastName: editData.lastName,
          img: editData.img,
          description: editData.description,
        }
      : {},
  });

  useEffect(() => {
    if (editData) {
      reset({
        firstName: editData.firstName,
        lastName: editData.lastName,
        img: editData.img,
        description: editData.description,
      });
    }
  }, [editData, reset]);

  const commentMutation = useMutation({
    mutationFn: (data) => commentService.create(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Коментара беше изпратен!");
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const commentUpdateMutation = useMutation({
    mutationFn: (data, id) => commentService.update(data, data._id),
    onSuccess: () => {
      queryClient.invalidateQueries("userComments");
      navigate("/comments");
      toast.success("Коментара беше променен!");
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });

  const onSubmit = (data) => {
    if (editData) {
      const updatedData = { ...data, _id: editData._id };
      commentUpdateMutation.mutate(updatedData);
    } else {
      commentMutation.mutate(data);
    }
  };

  return (
    <div onClick={handleOuterClick}>
      {show ? (
        <div className={styles.modalContainer}>
          <div onClick={handleInnerClick} className={styles.wrapper}>
            <div className={styles.closeBtn}>
              <button
                onClick={() => {
                  closeModal();
                  setRegistered(false);
                  reset();
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={styles.titleText}>
              <div className={`${styles.title} ${styles.signup}`}>
                Добави коментар
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formInner}>
                <form
                  className={styles.login}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className={styles.field}>
                    <input
                      type="text"
                      placeholder="Име"
                      {...register("firstName")}
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      type="text"
                      placeholder="Фамилия"
                      {...register("lastName")}
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      type="text"
                      placeholder="Снимка"
                      {...register("img")}
                    />
                  </div>
                  <div className={styles.field}>
                    <textarea
                      placeholder="Коментар"
                      {...register("description")}
                      className={styles.textarea}
                    />
                  </div>
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input type="submit" value={"Изпрати"} />
                  </div>
                </form>
                {errors && (
                  <p className="errorMsg">
                    {errors[Object.keys(errors)[0]]?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommentModal;
