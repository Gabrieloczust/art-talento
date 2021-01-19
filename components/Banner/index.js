import styles from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.title}><b>Art</b></span>
                <span className={styles.description}>A Empresa conta com profissionais experientes que buscam qualidade e a melhor solução na execução do seu projeto.</span>
                <button>Orçamento</button>
            </div>
            <div className={styles.image}>
                <img src="/banner-image.svg" alt="Imagem do Banner" />
            </div>
        </div>
    )
}
