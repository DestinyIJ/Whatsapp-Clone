import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy Coding!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className='flex items-center justify-center'>
          <h1 className="text-3xl font-bold underline">
            Hello, Awesome Human!
          </h1>
        </div> 
      </main>
      <footer >
        
      </footer>
    </div>
  )
}
