import Head from 'next/head'
import Image from 'next/image'
import { Terminal } from '../components'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zac Monroe</title>
        <meta name="description" content="Zac Monroe's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Terminal />
    </div>
  )
}
