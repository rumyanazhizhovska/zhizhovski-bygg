"use client";

import { useState } from "react";
import Link from "next/link";
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
                        <Link href="/">Hjem</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/about-us">Om oss</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/contact">Kontakt</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/services">Tjenester</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href="/projects">Prosjekter</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default Menu;