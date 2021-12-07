import type { NextPage } from 'next'
import Head from 'next/head'
import HomeContent from '../components/home/HomeContent'
import styles from '../styles/root.module.css'

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>First app</title>
        <meta name="description" content="First" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent/>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default HomePage
