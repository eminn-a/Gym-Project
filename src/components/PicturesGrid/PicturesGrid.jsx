import { ssrImportKey } from "vite/runtime";
import styles from "./PicturesGridStyles.module.css";

export default function PicturesGrid() {
  return (
    <section>
      <div className={styles.infoBox}>
        <h1>
          <span className={styles.gradientText}>Our Clients</span>
        </h1>
        <h3>
          <span className={styles.gradientText}>Our clients</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit
          quisquam nobis praesentium earum maxime, dolorum dolor fugit beatae
          quia?
        </p>
        <div className={styles.btnBox}>
          <button className={styles.btn}>Click</button>
          <button className={styles.btn}>Send Mail</button>
        </div>
      </div>
      <div className={styles.photoGalery}>
        <div className={styles.column}>
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
