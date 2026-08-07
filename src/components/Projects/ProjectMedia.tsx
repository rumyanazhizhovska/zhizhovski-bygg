import Image from "next/image";
import { ImagePlus } from "lucide-react";
import type { ProjectMedia as ProjectMediaType } from "@/types/portfolio";
import styles from "./ProjectMedia.module.css";

type ProjectMediaProps = {
  media?: ProjectMediaType;
  title: string;
  placeholderVariant?: "single" | "before-after";
};

export default function ProjectMedia({
  media,
  title,
  placeholderVariant = "single",
}: ProjectMediaProps) {
  if (media?.type === "single") {
    return (
      <div className={styles.singleMedia}>
        <Image
          src={media.image.src}
          alt={media.image.alt}
          fill
          className={styles.image}
          sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 32vw"
        />
      </div>
    );
  }

  if (media?.type === "before-after") {
    return (
      <div
        className={styles.comparison}
        role="group"
        aria-label={`Før- og etterbilder for ${title}`}
      >
        <figure className={styles.comparisonPanel}>
          <Image
            src={media.before.src}
            alt={media.before.alt}
            fill
            className={styles.image}
            sizes="(max-width: 720px) 50vw, 18vw"
          />
          <figcaption className={styles.mediaLabel}>Før</figcaption>
        </figure>
        <figure className={styles.comparisonPanel}>
          <Image
            src={media.after.src}
            alt={media.after.alt}
            fill
            className={styles.image}
            sizes="(max-width: 720px) 50vw, 18vw"
          />
          <figcaption className={styles.mediaLabel}>Etter</figcaption>
        </figure>
      </div>
    );
  }

  if (placeholderVariant === "before-after") {
    return (
      <div
        className={styles.comparisonPlaceholder}
        role="img"
        aria-label={`Plass for før- og etterbilder til ${title}`}
      >
        <div>
          <span className={styles.placeholderLabel}>Før</span>
        </div>
        <div>
          <span className={styles.placeholderLabel}>Etter</span>
        </div>
        <span className={styles.comparisonNote}>Før / etter</span>
      </div>
    );
  }

  return (
    <div
      className={styles.placeholder}
      role="img"
      aria-label={`Plass for prosjektbilder til ${title}`}
    >
      <span className={styles.cornerMark} aria-hidden="true" />
      <ImagePlus size={24} strokeWidth={1.5} aria-hidden="true" />
      <span>Bilder legges inn her</span>
    </div>
  );
}
