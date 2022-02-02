import styles from "./style.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hello, I'm <span className={styles.name}>Ali Erdem Ay</span>.
      </h1>
      <i className={`${styles.mouse_icon} lni lni-scroll-down`}></i>
    </main>
  );
}
