import styles from "./PriceTable.module.css";
import PriceTableCard from "./PriceTableCard";

export default function PriceTable({ priceData }) {
  return (
    <div className={styles.section} id="classes">
      <h1>
        <span className={styles.gradientText}>Нашите цени</span>
      </h1>
      <p>Мнения на нашите клиенти</p>
      <div className={styles.wrapper}>
        {priceData.map((x, index) => (
          <PriceTableCard key={index} data={x} />
        ))}
      </div>
    </div>
  );
}
