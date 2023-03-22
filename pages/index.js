import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
      <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[kotki]</p>
        <p>
          (strona jest w budowie )
          <a href="https://www.youtube.com/watch?v=pgs4KeaEsBk">amcia vibe</a>
        </p>
      </section>
      </Layout>
  )
}