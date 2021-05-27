import styles from './navBar.module.css';

export function NavigationBar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.nav__left}>
                <a href="/">
                    <img src="/favicon.png" alt="logo"/>
                </a>
            </div>
            <div className={styles.nav__middle}>
                <a href="/">Início</a>
                <a href="/about">Sobre</a>
                <a href="/">Serviços</a>
            </div>
            <div className={styles.nav__right}>
                <a href="/">Entrar</a>
                <a href="/">Criar conta</a>
            </div>       
        </div>
    );
}