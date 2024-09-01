import { useState } from "react";
import styles from "./NavbarStyles.module.css";
import AuthModal from "../AuthModal/AuthModal";
import { useToaster } from "react-hot-toast";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const closeModal = () => {
    setShowModal((x) => (x = false));
  };

  const closeMobile = () => {
    setMobileMenu((x) => (x = true));
    setShowModal((x) => (x = true));
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const scrollToSection = (selector) => {
    setMobileMenu(true);
    setShowModal((x) => (x = false));
    const section = document.querySelector(selector);
    const offset = 60;
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth", // Added smooth scrolling behavior
    });
  };

  return (
    <>
      <AuthModal show={showModal} closeModal={closeModal} />
      <nav>
        <a
          onClick={() => scrollToSection("#hero")}
          className={styles.gradientText}
        >
          <span className={styles.gradientText}>
            YosifFIT{""}
            <i className="fa-solid fa-dumbbell"></i>
          </span>
        </a>
        <div>
          <ul
            className={
              mobileMenu
                ? styles.navbarLinks
                : `${styles.navbarLinks} ${styles.active}`
            }
          >
            <li>
              <a onClick={() => scrollToSection("#hero")}>Начало</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("#classes")}>Програми</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("#about")}>За нас</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("#testemonials")}>Отзиви</a>
            </li>
            <div className={styles.btn} onClick={closeMobile}>
              Вход
            </div>
            <div className={styles.user} onClick={() => toggleProfile()}>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt=""
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
                    alt=""
                  />
                  <h2>Jhon Doe</h2>
                </div>
                <hr />
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-comment"></i>
                  <p> Моите коментари</p>
                  <span>{">"}</span>
                </a>
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-camera"></i>
                  <p>Нашите клиенти</p>
                  <span>{">"}</span>
                </a>
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-list-check"></i>
                  <p>Програми</p>
                  <span>{">"}</span>
                </a>
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-medal"></i>
                  <p>Треньори</p>
                  <span>{">"}</span>
                </a>
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-sack-dollar"></i>
                  <p>Цени</p>
                  <span>{">"}</span>
                </a>
                <a href="" className={styles.subMenuLink}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <p>Изход</p>
                  <span>{">"}</span>
                </a>
              </div>
            </div>
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
