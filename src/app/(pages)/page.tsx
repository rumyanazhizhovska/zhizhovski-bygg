import styles from "../page.module.css";
import GoogleReviewsLink from "@/components/Reviews/GoogleReviewsLink";
import Sections from "@/components/Sections/Sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>VELKOMMEN</h1>
        <p>
          Den offisielle nettsiden til Zhizhovski Bygg AS. Vi er et lite firma som tilbyr profilerte tjenester innen bygg og anlegg.
          Vår visjon er å levere kvalitetsarbeid til våre kunder.
          
        </p>
        <p className={styles.p}>
          Er du nysgjerrig på hva våre kunder synes om oss? Klikk på knappen nedenfor for å lese våre <GoogleReviewsLink />.
        </p>
        <Sections /> 
      </div>
    </main>
  );
}
