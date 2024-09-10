import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import styles from "./TestemonialsStyles.module.css";
import ErrorMessage from "../shared/ErrorMessage/ErrorMessage";
import Spiner from "../shared/spiner/Spiner";

export default function Testemonials({ testemonials, error, isLoading }) {
  const [comment, setComment] = useState(0);

  function showNextComment() {
    if (testemonials.length > 1) {
      setComment((prevComment) => {
        if (prevComment === testemonials.length - 1) return 0;
        return prevComment + 1;
      });
    }
  }

  useEffect(() => {
    if (testemonials.length > 1) {
      const timer = setTimeout(() => {
        setComment((prevComment) => {
          if (prevComment === testemonials.length - 1) return 0;
          return prevComment + 1;
        });
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [comment, testemonials]);

  return (
    <div className={styles.trip} id="testemonials">
      <div>
        <h1>
          <span className={styles.gradientText}>Отзиви</span>
        </h1>
        <p>Мнения на нашите клиенти</p>
      </div>
      {isLoading && <Spiner />}
      {error && (
        <ErrorMessage message={"Възникна грешка моля опитайте по-късно!"} />
      )}
      <div className={styles.tripCardContainer} onClick={showNextComment}>
        {testemonials?.map((x, index) => (
          <SingleCard key={index} data={x} comment={comment} />
        ))}
      </div>
    </div>
  );
}
