import { useState } from "react";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState("true");
  return (
    <>
      <nav>
        <a href="">
          Pasha Gym <i className="fa-solid fa-dumbbell"></i>
        </a>
        <div>
          <ul
            className={
              mobileMenu
                ? styles.navbarLinks
                : `${styles.navbarLinks} ${styles.active}`
            }
          >
            <li>Начало</li>
            <li>За Нас</li>
            <li>Програми</li>
            <li>Контакти</li>
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
