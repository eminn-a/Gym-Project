import { ssrImportKey } from "vite/runtime";
import styles from "./PicturesGridStyles.module.css";

export default function PicturesGrid() {
  return (
    <section>
      <div className={styles.infoBox}>
        <h1>
          <span className={styles.gradientText}>Нашите клиенти</span>
        </h1>
        <p>
          Присъединете се към нашето семейство от доволни клиенти и започнете
          своето пътешествие към по-здравословен и активен начин на живот още
          днес!
        </p>
        <div className={styles.btnBox}>
          <button className={styles.btn}>Обади се</button>
          <button className={styles.btn}>Изпрати Имейл</button>
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
              src="https://images.pexels.com/photos/3112004/pexels-photo-3112004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/2628215/pexels-photo-2628215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>{" "}
          <div className={styles.photo}>
            <img
              src="https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
