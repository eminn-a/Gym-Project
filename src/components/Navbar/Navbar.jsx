// import { useState } from "react";
// import styles from "./NavbarStyles.module.css";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState("true");
//   return (
//     <>
//       <nav>
//         <a href="">
//           Pasha Gym <i className="fa-solid fa-dumbbell"></i>
//         </a>
//         <div>
//           <ul
//             className={
//               mobileMenu
//                 ? styles.navbarLinks
//                 : `${styles.navbarLinks} ${styles.active}`
//             }
//           >
//             <Link to="about">
//               <li>Начало</li>
//             </Link>
//             <li>За Нас</li>
//             <li>Програми</li>
//             <li>Контакти</li>
//           </ul>
//         </div>
//         <div className={styles.mobile}>
//           <i
//             className={mobileMenu ? "fa-solid fa-bars" : "fa-solid fa-x"}
//             onClick={() => setMobileMenu(!mobileMenu)}
//           ></i>
//         </div>
//       </nav>
//     </>
//   );
// }

import { useState } from "react";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true); // Set initial state to true (boolean)

  return (
    <nav>
      <a href="#home">
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
          <li>
            <a href="#hero">Начало</a>
          </li>
          <li>
            <a href="#classes">Програми</a>
          </li>
          <li>
            <a href="#about">За нас</a>
          </li>
          <li>
            <a href="#testemonials">Отзиви</a>
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
