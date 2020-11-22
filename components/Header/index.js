import { useState } from 'react'
import styles from './Header.module.scss'
import { BiMenu } from 'react-icons/bi'

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false)

    const changeMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <span className={styles.logo}>Art&Talento</span>

                <div id={styles.hambuguer} onClick={changeMenu}>
                    <BiMenu />
                </div>

                <nav className={styles.nav} data-open={openMenu ? 'true' : 'false'} onClick={() => setOpenMenu(false)}>
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
