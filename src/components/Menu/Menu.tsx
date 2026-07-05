"use client";

import { useState } from "react";
import styles from "./Menu.module.css";
import { Menu as MenuIcon } from "lucide-react";

function Menu() {
    const [userBoxIsOpen, setBoxIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setBoxIsOpen(true)}>
                <MenuIcon className={styles["menu-icon"]} />
            </button>

            {userBoxIsOpen && (
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <a href="/">Hjem</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/about-us/page">Om oss</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/contact/page">Kontakt</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/services/page">Tjenester</a>
                    </li>
                    <li className={styles.li}>
                        <a href="/projects/page">Prosjekter</a>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Menu;