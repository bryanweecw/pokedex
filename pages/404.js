import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        <a
          href="https://www.youtube.com/watch?v=1vrEljMfXYo"
          target="_blank"
          style={{ color: "black" }}
          rel="noreferrer"
        >
          Country roads,
        </a>{" "}
        <Link href="/"> take me home</Link>
      </h2>
      <p className={styles.description}>
        {" "}
        <a
          href="https://www.youtube.com/watch?v=PTZ82FgMvHs&ab_channel=jewelbox90"
          target="_blank"
          rel="noreferrer"
        >
          404 - Page Not Found
        </a>
      </p>
    </div>
  );
}
