import styles from "./PriceTable.module.css";

export default function PriceTable() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.table} ${styles.basic}`}>
        <div className={styles.priceSection}>
          <div className={styles.priceArea}>
            <div className={styles.innerArea}>
              <span className={styles.price}>20</span>
              <span className={styles.text}>ЛВ</span>
            </div>
          </div>
        </div>
        <div className={styles.packageName}>Единична Тренировка</div>
        <div className={styles.features}>
          <li>
            <span className={styles.listName}>Пробна сесия</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Фокус върху конкретни цели</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Съвети за упражнения</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Специални предложения</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Мотивация и подкрепа</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
        </div>
      </div>
      <div className={`${styles.table} ${styles.basic}`}>
        <div className={styles.priceSection}>
          <div className={styles.priceArea}>
            <div className={styles.innerArea}>
              <span className={styles.price}>30</span>
              <span className={styles.text}>ЛВ</span>
            </div>
          </div>
        </div>
        <div className={styles.packageName}>Персонални тренировки</div>
        <div className={styles.features}>
          <li>
            <span className={styles.listName}>
              Индивидуализирани тренировки
            </span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>
              Корекции и съвети за техниката
            </span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Гъвкавост и разтягане</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Мотивация и подкрепа</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Отчетност и прогрес</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
        </div>
      </div>
      <div className={`${styles.table} ${styles.premium}`}>
        <div className={styles.ribbon}>
          {" "}
          <span>НОВО!</span>
        </div>
        <div className={styles.priceSection}>
          <div className={styles.priceArea}>
            <div className={styles.innerArea}>
              <span className={styles.price}>90</span>
              <span className={styles.text}>ЛВ</span>
            </div>
          </div>
        </div>
        <div className={styles.packageName}>Хранителна програма</div>
        <div className={styles.features}>
          <li>
            <span className={styles.listName}>
              Създаване на калориен дефицит
            </span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>
              Персонализирани хранителни планове
            </span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Хранителни насоки</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>Ежедневен дневник за храна</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
          <li>
            <span className={styles.listName}>
              Седмични проверки и корекции
            </span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}
