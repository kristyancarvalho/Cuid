import { NavigationBar } from "../components/navigationBar";
import { MissionCard } from '../components/missionCard';
import { VisionCard } from "../components/visionCard";
import { ValuesCard } from "../components/valuesCard";

import Head from 'next/head'

import styles from '../styles/about.module.css';
import { Footer } from "../components/footer";

export default function About() {
  return (
    <>
      <Head>
        <title>Cuid | Sobre</title>
      </Head>

      <NavigationBar />
      <div  className={styles.container}>
        <div className={styles.content}>
          <div className={styles.presentation}>
            <span>Quem somos</span>
            <p>Criada em 2017 para facilitar a vida de pessoas que precisam de cuidadores para auxílio nos cuidados de seus entes, a Cuid conecta você a um time de colaboradores excepcionais, com grande experiência para garantir a segurança e excelência nos serviços prestados. Todos os nossos parceiros passam por uma criteriosa avaliação onde há a validação de documentação e testes psicológicos.
            </p>
          </div>

          <div className={styles.description__container}>
           <span>Missão, visão e valores</span>
          <div className={styles.description_cards}>
            <MissionCard />
            <VisionCard />
            <ValuesCard />
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
