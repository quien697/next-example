import Head from 'next/head';
/* Common Commponents */
import Header from '../components/header';
/* CSS */
import styles from '../styles/Home.module.css';

export default function Home() {
  console.log("Home");
  return (
    <div className="container">
      <Head>
        <title>Next Example - 首頁</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>Home</div>
    </div>
  )
}