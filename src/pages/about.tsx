import styles from '../styles/about.module.css';

import { NavigationBar } from "../components/navigationBar";

import Head from 'next/head'

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
        </div>
      </div>
    </>
  );
}
