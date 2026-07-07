"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";
import { Menu as MenuIcon } from "lucide-react";

function Menu() {
    const [userBoxIsOpen, setBoxIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!userBoxIsOpen) return;

        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setBoxIsOpen(false);
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setBoxIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [userBoxIsOpen]);

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <button className={styles.button} onClick={() => setBoxIsOpen((current) => !current)}>
                <MenuIcon className={styles["menu-icon"]} />
            </button>

            {userBoxIsOpen && (
                <div className={styles.box}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link href="/" onClick={() => setBoxIsOpen(false)}>
                                Hjem
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/about-us" onClick={() => setBoxIsOpen(false)}>
                                Om oss
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/contact" onClick={() => setBoxIsOpen(false)}>
                                Kontakt
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/services" onClick={() => setBoxIsOpen(false)}>
                                Tjenester
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/projects" onClick={() => setBoxIsOpen(false)}>
                                Prosjekter
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;