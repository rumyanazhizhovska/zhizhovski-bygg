"use client";

import { useForm, ValidationError } from "@formspree/react";
import Button from "../Button/Button";
import { Upload as UploadIcon } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xnjebygl");

    if (state.succeeded) {
        return (
            <div className={styles.success}>
                <p className={styles.successTitle}>Takk for meldingen.</p>
                <p className={styles.successText}>Vi har mottatt forespørselen din og tar kontakt så snart som mulig.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                    Navn
                </label>
                <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    inputMode="text"
                    pattern="[A-Za-zÀ-ÿÆØÅæøå'’ -]+"
                    placeholder="Kari Nordmann"
                    required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                    E-post
                </label>
                <input className={styles.input} type="email" id="email" name="email" autoComplete="email" placeholder="kari-nordmann@gmail.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="phoneNumber">
                    Telefon nummer
                </label>
                <div className={styles.phoneRow}>
                    <input
                        className={styles.select}
                        id="phoneCountryCode"
                        name="phoneCountryCode"
                        autoComplete="tel-country-code"
                        defaultValue="+47"
                        inputMode="numeric"
                        pattern="\+?[0-9]{1,4}"
                        title="Skriv en gyldig landskode, for eksempel +47 eller +1."
                        placeholder="+47"
                        required
                    />
                    <input
                        className={styles.input}
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        autoComplete="tel"
                        inputMode="numeric"
                        pattern="[0-9()\s.-]+"
                        placeholder="123 45 678"
                        required
                    />
                </div>
                <ValidationError prefix="Phone number" field="phoneNumber" errors={state.errors} />
            </div>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                    Beskriv oppdraget
                </label>
                <textarea className={styles.textarea} id="message" name="message" rows={6} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="images">
                    Bilder
                </label>
                <input
                    className={styles.fileInput}
                    type="file"
                    id="images"
                    name="images"
                    accept="image/*"
                    capture="environment"
                    multiple
                />
                <label
                    htmlFor="images"
                    className={styles.fileButton}
                >
                    Velg bilder
                    <UploadIcon size={18} aria-hidden="true" />
                </label>
                <p className={styles.helperText}>Valgfritt. Du kan legge ved ett eller flere bilder av oppdraget.</p>
            </div>
            <div className={styles.actions}>
                <Button type="submit" buttonStyle="primary" className={styles.submitButton} disabled={state.submitting}>
                    {state.submitting ? "Sender..." : "Få gratis befaring"}
                </Button>
            </div>
        </form>
    );
}
