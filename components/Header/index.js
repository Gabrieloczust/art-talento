import styles from './Header.module.scss'
// import { FaWhatsapp } from 'react-icons/fa'
// import { IoIosMail } from 'react-icons/io'
// import { SiGooglemaps } from 'react-icons/si'

// const whatsAppColor = "#25D366";

export default function Header() {
    return (
        <header className={styles.header}>
            {/* <div className={styles.supmenu}>
                <a className={styles.contactIcon} href="https://goo.gl/maps/5UHYLPQX3WD48vfb9" target="_blank">
                    <SiGooglemaps/>
                    <span>Rua Lizimaco Serapião, 64 - Novo Mundo</span>
                </a>
                <div className={styles.contact}>
                    <a className={styles.contactIcon} href="mailto:anderson@arttalento.com.br">
                        <IoIosMail />
                        <span>anderson@arttalento.com.br</span>
                    </a>
                    <div className={styles.separator}></div>
                    <a className={styles.contactIcon} href="http://wa.me/554133878068" target="_blank">
                        <FaWhatsapp color={whatsAppColor}/>
                        <span><b>41</b> 3387-8068</span>
                    </a>
                </div>
            </div> */}

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
