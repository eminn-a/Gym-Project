import { useContext, useState } from "react";
import styles from "./NavbarStyles.module.css";
import AuthModal from "../AuthModal/AuthModal";
import { UserContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const { userData, setUserData, isAdmin, setIsAdmin } =
    useContext(UserContext);

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const logoutUserMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      setUserData(null);
      setIsAdmin(null);
      setShowProfile(false);
      setMobileMenu(true);
      toast.success("Довиждане!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(`Logout failed: ${error.message}`);
    },
  });

  const closeProfileclick = () => {
    setShowProfile(false);
    setMobileMenu(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (selector) => {
    setMobileMenu(true);
    setShowProfile(false);
    setShowModal(false);
    const section = document.querySelector(selector);
    if (section) {
      const offset = 90;
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AuthModal
        show={showModal}
        closeModal={closeModal}
        setUser={setUserData}
        setIsAdmin={setIsAdmin}
      />
      <nav>
        <Link
          to="/"
          className={styles.gradientText}
          onClick={() => scrollToSection(null)}
        >
          YosifFIT <i className="fa-solid fa-dumbbell"></i>
        </Link>
        <div>
          <ul
            className={
              mobileMenu
                ? styles.navbarLinks
                : `${styles.navbarLinks} ${styles.active}`
            }
          >
            <li>
              <Link to="/" onClick={() => scrollToSection(null)}>
                Начало
              </Link>
            </li>
            <li>
              <Link to="/#classes" onClick={() => scrollToSection("#classes")}>
                Програми
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => scrollToSection("#about")}>
                За нас
              </Link>
            </li>
            <li>
              <Link
                to="/#testemonials"
                onClick={() => scrollToSection("#testemonials")}
              >
                Отзиви
              </Link>
            </li>

            {!userData && (
              <div
                className={styles.btn}
                onClick={() => {
                  setMobileMenu(true);
                  setShowModal(!showModal);
                }}
              >
                Вход
              </div>
            )}

            {userData && (
              <>
                <div className={styles.user} onClick={toggleProfile}>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="Profile"
                  />
                </div>
                <div
                  className={
                    showProfile
                      ? `${styles.subWrap} ${styles.activePofile}`
                      : `${styles.subWrap}`
                  }
                >
                  <div className={styles.subMenu}>
                    <div className={styles.userInfo}>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        alt="Profile"
                      />
                      <h2>{userData.email}</h2>
                    </div>
                    <hr />
                    <Link
                      to="comments"
                      onClick={closeProfileclick}
                      className={styles.subMenuLink}
                    >
                      <i className="fa-solid fa-comment"></i>
                      <p>Моите коментари</p>
                      <span>{">"}</span>
                    </Link>
                    {isAdmin && (
                      <>
                        <Link
                          to="programs"
                          className={styles.subMenuLink}
                          onClick={closeProfileclick}
                        >
                          <i className="fa-solid fa-list-check"></i>
                          <p>Програми</p>
                          <span>{">"}</span>
                        </Link>
                        <Link
                          to="about"
                          className={styles.subMenuLink}
                          onClick={closeProfileclick}
                        >
                          <i className="fa-solid fa-medal"></i>
                          <p>Треньори</p>
                          <span>{">"}</span>
                        </Link>
                        <Link
                          to="price"
                          className={styles.subMenuLink}
                          onClick={closeProfileclick}
                        >
                          <i className="fa-solid fa-sack-dollar"></i>
                          <p>Цени</p>
                          <span>{">"}</span>
                        </Link>
                      </>
                    )}
                    <Link
                      onClick={() => {
                        logoutUserMutation.mutate();
                      }}
                      className={styles.subMenuLink}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <p>Изход</p>
                      <span>{">"}</span>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
        <div className={styles.mobile}>
          <i
            className={mobileMenu ? "fa-solid fa-bars" : "fa-solid fa-x"}
            onClick={() => setMobileMenu(!mobileMenu)}
          ></i>
        </div>
      </nav>
    </>
  );
}
