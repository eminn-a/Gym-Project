import toast from "react-hot-toast";
import styles from "./AuthModal.module.css";
import { useState } from "react";

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
                }}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={styles.titleText}>
              {registered ? (
                <div className={`${styles.title} ${styles.signup}`}>
                  Register now
                </div>
              ) : (
                <div className={`${styles.title} ${styles.login}`}>
                  Sign in{" "}
                </div>
              )}
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formInner}>
                <form className={styles.login}>
                  <div className={styles.field}>
                    <input type="text" placeholder="Email Address" />
                  </div>
                  <div className={styles.field}>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
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
                        placeholder="Re-Password"
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
                      <a href="#">Forgot password?</a>
                    </div>
                  )}
                  <div className={`${styles.field} ${styles.btn}`}>
                    <div className={styles.btnLayer}></div>
                    <input
                      type="submit"
                      value={registered ? "Register" : "Sign In"}
                    />
                  </div>
                </form>

                {!registered ? (
                  <div className={styles.signupLink}>
                    <hr />
                    Not a member?
                    <p
                      onClick={() => {
                        setRegistered(true);
                        setShowPassword(false);
                        setShowRePassword(false);
                      }}
                    >
                      Register now
                    </p>
                    <hr />
                  </div>
                ) : (
                  <div className={styles.signupLink}>
                    <hr />
                    Already registered?
                    <p
                      onClick={() => {
                        setRegistered(false);
                        setShowPassword(false);
                        setShowRePassword(false);
                      }}
                    >
                      Sign in now
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
