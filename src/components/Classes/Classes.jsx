import styles from "./ClassesStyles.module.css";

export default function Classes() {
  return (
    <div className={styles.section}>
      <h1>
        {" "}
        <span className={styles.gradientText}>Нашите програми</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>HIIT</h1>
          </div>
          <div className={styles.intro}>
            <p>Фокус: Изгаряне на мазнини и издръжливост</p>
            <p>
              Ползи: Бързо изгаряне на калории и подобрение на
              кардиоваскуларната система
            </p>
            <p>
              Структура: Интензивни интервали на упражнения, последвани от
              кратки почивки
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>Силови тренировки</h1>
          </div>
          <div className={styles.intro}>
            <p>Фокус: Изграждане на мускулна сила</p>
            <p>
              Ползи: Увеличена мускулна маса, плътност на костите и метаболизъм
            </p>
            <p>Структура: Използване на свободни тежести, машини и ластици</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="classesImg"
          />
          <div className={styles.title}>
            <h1>Функционални тренировки</h1>
          </div>
          <div className={styles.intro}>
            <p>Фокус: Подобряване на общата физическа форма</p>
            <p>Ползи: Повишена гъвкавост, баланс, координация и сила</p>
            <p>
              Структура: Използване на упражнения с телесно тегло, тренировка с
              гирички, балансова топка и д.р
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
