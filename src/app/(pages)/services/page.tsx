import type { Metadata } from "next";
import styles from "./page.module.css";
import ServicesOverview from "@/components/Services/ServicesOverview";
import { SERVICE_CATEGORIES, SERVICE_COUNT } from "@/data/services";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Se tjenester innen snekkerarbeid, montering, håndverkertjenester og malerarbeid.",
};

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <section className={styles.container} aria-labelledby="services-title">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Tjenester / fagområder</p>
          <h1 id="services-title">Riktig håndverk, punkt for punkt.</h1>
          <p className={styles.intro}>
            Utforsk det vi kan hjelpe deg med. Hvert tjenestepunkt leder direkte
            til relevante prosjekter og er klart for å fylles med nye arbeider.
          </p>
        </div>

        <dl className={styles.summary} aria-label="Oversikt over tjenester">
          <div>
            <dt>Fagområder</dt>
            <dd>{String(SERVICE_CATEGORIES.length).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Tjenester</dt>
            <dd>{String(SERVICE_COUNT).padStart(2, "0")}</dd>
          </div>
          <div>
            <dt>Prosjektbase</dt>
            <dd>01</dd>
          </div>
        </dl>
      </section>

      <ServicesOverview />
    </main>
  );
}
