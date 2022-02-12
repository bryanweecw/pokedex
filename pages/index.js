import Head from "next/head";
import styles from "../styles/Home.module.css";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bryan's Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Bryan's Pokedex!
          </a>
        </h1>
        <Search />
      </main>
    </div>
  );
}
