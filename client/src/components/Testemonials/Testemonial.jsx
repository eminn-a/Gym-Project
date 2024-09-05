import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import styles from "./TestemonialsStyles.module.css";

export default function Testemonials({ testemonials, error, isLoading }) {
  const [comment, setComment] = useState(null);
  function showNextComment() {
    setComment((comment) => {
      if (comment === testemonials?.length - 1) return 0;
      return comment + 1;
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setComment((prevComment) => {
        if (prevComment === testemonials?.length - 1) return 0;
        return prevComment + 1;
      });
    }, 8000);

    return () => clearTimeout(timer);
  }, [comment]);

  if (error) {
    return (
      <div>
        <h1>Error!</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={styles.trip} id="testemonials">
      <div>
        <h1>
          <span className={styles.gradientText}>Отзиви</span>
        </h1>
        <p>Мнения на нашите клиенти</p>
      </div>
      <div className={styles.tripCardContainer} onClick={showNextComment}>
        {testemonials?.map((x, index) => (
          <SingleCard key={index} data={x} comment={comment} />
        ))}
      </div>
    </div>
  );
}
