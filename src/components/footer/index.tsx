import Link from 'next/link'

import styles from './index.module.css';

export function Footer() {
    return (
        <footer className={styles.footer__container}>
            <div className={styles.footer__elements}>
                <div className={styles.footer__left}>
                    <span>Links úteis</span>
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                    <Link href="/works">
                        <a>Serviços</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contato</a>
                    </Link>
                </div>

                <div className={styles.footer__middle}>
                    <span>Institucional</span>
                    <Link href="https://app.cuid.com.br/">
                            <a>Chamar um cuidador</a>
                    </Link>
                    <Link href="https://app.cuid.com.br/profissionais/cadastro">
                            <a>Entrar para a cuid</a>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5511959984119&text=Ol%C3%A1,%0Dgostaria%20divulgar%20meus%20servi%C3%A7os%20na%20Cuid.">
                            <a>Anunciar um serviço</a>
                    </Link>
                </div>

                <div className={styles.footer__right}>
                    <span>Redes sociais</span>

                    <div className={styles.footer_right__connections}>
                        <Link href="https://app.cuid.com.br/">
                                <img src="/icons/facebook.png" alt=""/>
                        </Link>
                        <Link href="https://app.cuid.com.br/profissionais/cadastro">
                                <img src="/icons/instagram.png" alt=""/>
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=5511959984119&text=Ol%C3%A1,%0Dgostaria%20divulgar%20meus%20servi%C3%A7os%20na%20Cuid.">
                                <img src="/icons/whatsapp.png" alt=""/>
                        </Link> 
                    </div>
                </div>
            </div>
            <section className={styles.footer__rights}>
                <img src="/cuid-banner.png" alt=""/>
                <span>© Cuid 2017-2021. Todos os direitos reservados.</span>
            </section>
        </footer>
    );
}