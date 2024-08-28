import styles from "./AuthModal.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AuthModal = ({ show, closeModal, setUser }) => {
  const [registered, setRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

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
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Добре дощли брачед!");
    console.log(data);
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
              {registered ? (
                <div className={`${styles.title} ${styles.signup}`}>
                  Регистрирай се
                </div>
              ) : (
                <div className={`${styles.title} ${styles.login}`}>
                  Влез в профила си{" "}
                </div>
              )}
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
                      placeholder="Имейл"
                      {...register("email")}
                    />
                  </div>
                  <div className={styles.field}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Парола"
                      {...register("password")}
                    />
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`fa ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } ${styles.passwordIcon}`}
                    ></i>
                  </div>
                  {registered && (
                    <div className={styles.field}>
                      <input
                        type={showRePassword ? "text" : "password"}
                        placeholder="Повтори парола"
                        {...register("rePassword")}
                      />
                      <i
                        onClick={() => setShowRePassword(!showRePassword)}
                        className={`fa ${
                          showRePassword ? "fa-eye-slash" : "fa-eye"
                        } ${styles.passwordIcon}`}
                      ></i>
                    </div>
                  )}
                  {!registered && (
                    <div className={styles.passLink}>
                      <a href="#">Забравена парола?</a>
                    </div>
                  )}
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input
                      type="submit"
                      value={registered ? "Регистрация" : "Вход"}
                    />
                  </div>
                </form>

                {!registered ? (
                  <div className={styles.signupLink}>
                    <hr />
                    Нямаш профил?
                    <p
                      onClick={() => {
                        setRegistered(true);
                        setShowPassword(false);
                        setShowRePassword(false);
                        reset();
                      }}
                    >
                      Регистрирай се!
                    </p>
                    <hr />
                  </div>
                ) : (
                  <div className={styles.signupLink}>
                    <hr />
                    Влез в профила си.
                    <p
                      onClick={() => {
                        setRegistered(false);
                        setShowPassword(false);
                        setShowRePassword(false);
                        reset();
                      }}
                    >
                      Влез!
                    </p>
                    <hr />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AuthModal;
