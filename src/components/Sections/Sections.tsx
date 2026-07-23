import Image from "next/image";
import Link from "next/link";
import SectionNavigation from "@/components/SectionNavigation/SectionNavigation";
import { SectionNavigationItem } from "@/components/SectionNavigation/types";
import { getServices } from "@/data/services";
import styles from "./Sections.module.css";

type SectionData = {
    id: string;
    title: string;
    description: string;
    projects: Array<{
        title: string;
        image: string;
        alt: string;
        text: string;
        linkHref: string;
        linkText: string;
    }>;
};

export default async function Sections() {
    const sections: SectionData[] = await getServices();
    const navigationSections: SectionNavigationItem[] = sections.map(({ id, title, description }) => ({ id, title, description }));

    return (
        <div className={styles.layout}>
            <SectionNavigation sections={navigationSections} />
            <div className={styles.content}>
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <p className={styles.sectionText}>{section.description}</p>

                        {section.projects.length > 0 && (
                            <div className={styles.projectsGrid}>
                                {section.projects.map((project) => (
                                    <article key={project.title} className={styles.projectCard}>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={project.image}
                                                alt={project.alt}
                                                fill
                                                className={styles.projectImage}
                                                sizes="(max-width: 900px) 100vw, 40vw"
                                            />
                                        </div>

                                        <div className={styles.projectContent}>
                                            <h2 className={styles.projectTitle}>{project.title}</h2>
                                            <p className={styles.projectText}>{project.text}</p>

                                            <Link href={project.linkHref} className={styles.button}>
                                                {project.linkText}
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </div>
    );
}
