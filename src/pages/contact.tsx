import styles from '../styles/contact.module.css';

import { NavigationBar } from "../components/navigationBar";

import Head from 'next/head'

export default function Con() {
  return (
    <>
      <Head>
        <title>Cuid | Contato</title>
      </Head>

      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <span>Fale com a gente</span>

          <div className={styles.contact__elements}>
            <div className={styles.contact__left}>
              <p>Caso haja alguma dúvida, sugestão ou crítica. Escreva para nós, ficaremos muito gratos com a sua mensagem.</p>

              <section className={styles.email}>
                <span>
                  <img src="/icons/paper-plane.png" alt="enviar"/>
                  
                  Email
                  </span>
                <br/>
                <span>oi@cuidcare.com.br</span>
              </section>
              <section className={styles.whatsapp}>
                <span>
                  <img src="/icons/telephone.png" alt="enviar"/>
                  
                  Whatsapp
                  </span>
                <br/>
                <span>+55 11 95998-4119</span>
              </section>
            </div>
            <div className={styles.contact__right}>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
