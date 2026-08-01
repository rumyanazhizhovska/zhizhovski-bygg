import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "../../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Kontaktskjema</h1>
          <p>
            Send inn oppdraget ditt, så tar vi en prat om omfang, tid og
            løsning.
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
