import Head from "next/head";
import styles from "../styles/style.module.css";

import HomePage from "./home";

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ali Erdem Ay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.lineicons.com/3.0/lineicons.css"
          rel="stylesheet"
        />
      </Head>
      <HomePage />
    </div>
  );
}
