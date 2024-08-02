import { useState } from "react";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);

  // Smooth scroll with offset function
  const scrollToSection = (event, selector) => {
    event.preventDefault();
    const section = document.querySelector(selector);
    const offset = 60;
    window.scrollTo({
      top: section.offsetTop - offset,
    });
  };

  return (
    <nav>
      <a onClick={(e) => scrollToSection(e, "#hero")}>
        <span className={styles.gradientText}>
          YosifFIT <i className="fa-solid fa-dumbbell"></i>
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
            <a onClick={(e) => scrollToSection(e, "#hero")}>Начало</a>
          </li>
          <li>
            <a onClick={(e) => scrollToSection(e, "#classes")}>Програми</a>
          </li>
          <li>
            <a onClick={(e) => scrollToSection(e, "#about")}>За нас</a>
          </li>
          <li>
            <a onClick={(e) => scrollToSection(e, "#testemonials")}>Отзиви</a>
          </li>
        </ul>
      </div>
      <div className={styles.mobile}>
        <i
          className={mobileMenu ? "fa-solid fa-bars" : "fa-solid fa-x"}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></i>
      </div>
    </nav>
  );
}
