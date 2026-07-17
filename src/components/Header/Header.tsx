import styles from "./Header.module.css";
import Menu from "../Menu/Menu";

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <img
                    className={styles.img}
                    src="/logo-bc-transparent.svg"
                    alt="Zhizhovski Bygg"
                />
            </h1>
            <Menu/>
        </header>
    );
}

export default Header;
