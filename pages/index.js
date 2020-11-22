import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Header />
        <Banner />
        <Footer />
      </main>
    </>
  )
}
