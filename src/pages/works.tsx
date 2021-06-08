import styles from '../styles/works.module.css';

import { NavigationBar } from "../components/navigationBar";

import { CaregiverCard } from '../components/caregiverCard';
import { NurseryCard } from '../components/nurseryCard';
import { BabysittersCard } from '../components/babysittersCard';
import { Footer } from '../components/footer';
import { OperativeCard } from '../components/operativeCard';

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuid | Serviços</title>
      </Head>

      <NavigationBar />
      <div className={styles.container}>
          <div className={styles.content__container}>
            <span>Nossos serviços</span>
            
            <div className={styles.cards}>
              <CaregiverCard />
              <NurseryCard />
              <BabysittersCard />
              <OperativeCard />
            </div>
          </div>
      </div>

      <Footer />
    </>
  );
}
