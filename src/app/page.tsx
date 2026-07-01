import styles from "./page.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Velkommen! 👋</h1>
          <p>
            Du kan se koden for dette prosjektet{" "}
            <a
              className={styles.link}
              href="https://github.com/bekk/prosjektutgangspunkt"
            >
              i repoet på GitHub
            </a>
          </p>
          <p>
            Du kan endre koden i <code className={styles.code}>src/App.jsx</code>
          </p>
        </div>
      </main>     
    </div>
  );
}
