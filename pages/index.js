import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Node Ninja | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fuga adipisci non tenetur perspiciatis temporibus dolore. Accusantium officia qui esse atque, amet tenetur labore voluptatibus eaque harum quod, dolore repudiandae?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, asperiores dolore consectetur atque error itaque facere et eligendi placeat, voluptate voluptates. Architecto unde pariatur, laudantium sunt at dolorem quam fugit.</p>
        <Link href="/ninjas"><a className={styles.btn}>View Ninja Listing</a></Link>
      </div>
    </>
  )
}
