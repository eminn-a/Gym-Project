import styles from "./ClassesStyles.module.css";

export default function ClassesCard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.img} alt="classesImg" />
      <div className={styles.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={styles.intro}>
        {data.details?.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
    </div>
  );
}
