import styles from "./PriceTable.module.css";
import PriceTableCard from "./PriceTableCard";
import { priceData } from "../../data/priceData";

export default function PriceTable() {
  return (
    <div className={styles.wrapper}>
      {priceData.map((x, index) => (
        <PriceTableCard key={index} data={x} />
      ))}
    </div>
  );
}
