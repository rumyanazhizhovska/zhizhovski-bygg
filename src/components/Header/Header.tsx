import styles from "./Header.module.css";
import Menu from "../Menu/Menu";

function Header() {

    return (    
        <header className={styles.header}>
            <h1><img className={styles.img} src="/logo-bc-transparent.svg" alt="..."  /></h1>
            <h4>
                zhizhovski bygg
            </h4>
            <Menu/>
        </header>


    );
}

export default Header;