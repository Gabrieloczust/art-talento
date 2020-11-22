import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <span className={styles.logo}>Art&Talento</span>

                <nav className={styles.nav}>
                    <a className={styles.active}>Home</a>
                    <a>Quem Somos</a>
                    <a>Serviços</a>
                    <a>Portfólio</a>
                    <a>Contatos</a>
                </nav>
            </div>
        </header>
    )
}
