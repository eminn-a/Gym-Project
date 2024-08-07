import styles from "./PriceTable.module.css";

export default function PriceTableCard({ data }) {
  return (
    <div className={`${styles.table} ${styles.basic}`}>
      <div className={styles.priceSection}>
        <div className={styles.priceArea}>
          <div className={styles.innerArea}>
            <span className={styles.price}>{data.price}</span>
            <span className={styles.text}>ЛВ</span>
          </div>
        </div>
      </div>
      <div className={styles.packageName}>{data.title}</div>
      <div className={styles.features}>
        {data.details?.map((x, index) => (
          <li key={index}>
            <span className={styles.listName}>{x}</span>
            <span className={styles.icon}>
              <i className="fa-solid fa-check"></i>
            </span>
          </li>
        ))}
      </div>
    </div>
  );
}
