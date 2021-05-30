import Link from 'next/link'

import styles from './index.module.css';

export function NavigationBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.nav__left}>
                <Link  href="/"> 
                    <a href="/">
                        <img src="/favicon.png" alt="logo"/>
                    </a>
                </Link>
            </div>
            <div className={styles.nav__middle}>
                <Link href="/">
                    <a>Início</a>
                </Link>
                <Link href="/about">
                    <a>Sobre</a>
                </Link>
                <Link href="/works">
                    <a>Serviços</a>
                </Link>
            </div>
            <div className={styles.nav__right}>
                <Link href="/">
                    <a>Entrar</a>
                </Link>
                <Link  href="/">
                    <a>Criar conta</a>
                </Link>
            </div>       
        </div>
    );
}