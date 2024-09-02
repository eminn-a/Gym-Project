import { useContext, useState } from "react";
import styles from "./NavbarStyles.module.css";
import AuthModal from "../AuthModal/AuthModal";
import { clearUserData } from "../../utils/utils";
import { UserContext } from "../../context/authContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { userData, setUserData, isAdmin } = useContext(UserContext);

  const closeModal = () => {
    setShowModal(false);
  };

  const closeMobile = () => {
    setMobileMenu(true);
    setShowModal(true);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
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
      />
      <nav>
        <Link
          to="/"
          className={styles.gradientText}
          onClick={() => scrollToSection()}
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
              <Link to="/" onClick={() => scrollToSection()}>
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
                onClick={() => setShowModal(!showModal)}
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
                      onClick={() => setShowProfile(false)}
                      className={styles.subMenuLink}
                    >
                      <i className="fa-solid fa-comment"></i>
                      <p>Моите коментари</p>
                      <span>{">"}</span>
                    </Link>
                    {isAdmin && (
                      <>
                        <Link to="/a" className={styles.subMenuLink}>
                          <i className="fa-solid fa-camera"></i>
                          <p>Нашите клиенти</p>
                          <span>{">"}</span>
                        </Link>
                        <Link
                          to="/programs"
                          className={styles.subMenuLink}
                          onClick={() => setShowProfile(false)}
                        >
                          <i className="fa-solid fa-list-check"></i>
                          <p>Програми</p>
                          <span>{">"}</span>
                        </Link>
                        <Link
                          to="about"
                          className={styles.subMenuLink}
                          onClick={() => setShowProfile(false)}
                        >
                          <i className="fa-solid fa-medal"></i>
                          <p>Треньори</p>
                          <span>{">"}</span>
                        </Link>
                        <Link
                          to="price"
                          className={styles.subMenuLink}
                          onClick={() => setShowProfile(false)}
                        >
                          <i className="fa-solid fa-sack-dollar"></i>
                          <p>Цени</p>
                          <span>{">"}</span>
                        </Link>
                      </>
                    )}
                    <a
                      onClick={() => {
                        clearUserData();
                        setUserData(null);
                        setShowProfile(false);
                      }}
                      className={styles.subMenuLink}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <p>Изход</p>
                      <span>{">"}</span>
                    </a>
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
