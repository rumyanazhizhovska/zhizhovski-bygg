import Image from "next/image";
import Link from "next/link";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";
import { SectionNavigationItem } from "@/components/SectionNavigation/types";
import styles from "./Sections.module.css";

const navigationSections: SectionNavigationItem[] = [
  {
    id: "snekkerarbeid",
    title: "Snekkerarbeid",
    description:
      "Vi tar på oss alle slags snekkerarbeid, fra små reparasjoner til store prosjekter.",
  },
  {
        id: "håndverkertjenester",
    title: "Håndverkertjenester",
    description:
      "Vi tilbyr en rekke håndverkertjenester for å gi ditt hjem det perfekte utseendet.",
  },
  {
    id: "malerarbeid",
    title: "Malerarbeid",
    description:
      "Vi tilbyr profesjonell maling for både interiør og eksteriør.",
  },
];

export default function Sections() {
    return (
        <div className={styles.layout}>
            <SectionNavigation sections={navigationSections} />
            <div className={styles.content}>
            <section
                id="snekkerarbeid"
                className={styles.section}
            >
                <h1 className={styles.sectionTitle}>
                    {navigationSections[0]?.title}
                </h1>

                <p className={styles.sectionText}>
                    {navigationSections[0]?.description}
                </p>

                <div className={styles.projectsGrid}>
                    <article className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/snekkerarbeid.jpg"
                                alt="BILDEEEEEEEEEEE  Moderne snekkerarbeid utført av Zhizhovski Bygg AS"
                                fill
                                className={styles.projectImage}
                                sizes="(max-width: 900px) 100vw, 40vw" />
                        </div>

                        <div className={styles.projectContent}>
                            <h2 className={styles.projectTitle}>
                                Llund 22
                            </h2>

                            <p className={styles.projectText}>
                                Her har vi utført snekkerarbeid for en moderne enebolig.
                                 Vi har fokusert på detaljer og kvalitet i arbeidet vårt.
                            </p>

                            <Link
                                href="/projects"
                                className={styles.button}
                            >
                                Se mer om prosjektet
                            </Link>
                        </div>
                    </article>

                    <article className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/Mortrensrud.jpg"
                                alt="BILDEEEEEEEEEEE  Snkering av terrasse og inngangsparti utført av Zhizhovski Bygg AS"
                                fill
                                className={styles.projectImage}
                                sizes="(max-width: 900px) 100vw, 40vw" />
                        </div>

                        <div className={styles.projectContent}>
                            <h2 className={styles.projectTitle}>
                                Mortrensrud allé 5
                            </h2>

                            <p className={styles.projectText}>
                                Kan snkeres på alle slags terrasser og inngangspartier. Vi har fokusert på detaljer og kvalitet i arbeidet vårt.
                            </p>

                            <Link
                                href="/contact"
                                className={styles.button}
                            >
                                Kontakt oss ved interesse
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section id="håndverkertjenester" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    {navigationSections[1]?.title}
                </h2>

                <p className={styles.sectionText}>
                    {navigationSections[1]?.description}
                </p>
            </section>

            <section
                id="malerarbeid"
                className={styles.section}
            >
                <h2 className={styles.sectionTitle}>
                    {navigationSections[2]?.title}
                </h2>

                <p className={styles.sectionText}>
                    {navigationSections[2]?.description}
                </p>
            </section>
            </div>
        </div>
    );
}
