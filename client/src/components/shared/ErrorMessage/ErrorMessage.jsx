import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <h1 className={styles.errorMessage}>{message}</h1>;
}
