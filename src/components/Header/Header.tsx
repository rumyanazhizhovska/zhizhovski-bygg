import styles from "./Header.module.css";
import { Menu } from "lucide-react";

function Header() {
    return (    
        <header className={styles.header}>
            <h1><img className={styles.img} src="/logo-bc-transparent.svg" alt="..."  /></h1>
            <Menu className={styles.menu}/>
        </header>
    );
}

export default Header;