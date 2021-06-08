import styles from '../styles/home.module.css';

import { NavigationBar } from "../components/navigationBar";

import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuid | Início</title>
      </Head>

      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.content__container}>
          <div className={styles.content__left}>

            {/* introdução */}
            <span>Olá, <br />
            somos
            </span>
            <span>
              Cuid
            </span>

            <p>
              Sabemos o enorme desafio que existe em encontrar cuidadores de forma simples, rápida e segura.
              A Cuid conecta você a cuidadores experientes, para trazer a você mais tranquilidade e conforto a quem você ama.
            </p>

            {/* botões de conexão */}
            <div className={styles.buttons}>
              <Link href="https://app.cuid.com.br/">
                <button className={styles.callCaregiver}>
                    Chamar um cuidador
                    <img src="/icons/whiteRight.png" alt="arrow-right"/>
                </button>
              </Link>
              <Link href="https://app.cuid.com.br/profissionais/cadastro">
                <button className={styles.registerCaregiver}>
                  Cadastrar como cuidador
                  <img src="/icons/right.png" alt="arrow-right"/>
                </button>
              </Link>
            </div>
          </div>

           {/* lado direito */}
           <div className={styles.content__right} />
        </div>
      </div>
    </>
  );
}
