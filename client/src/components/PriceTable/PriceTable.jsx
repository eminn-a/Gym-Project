import styles from "./PriceTable.module.css";
import PriceTableCard from "./PriceTableCard";

export default function PriceTable({ priceData }) {
  return (
    <div className={styles.wrapper}>
      {priceData.map((x, index) => (
        <PriceTableCard key={index} data={x} />
      ))}
    </div>
  );
}
