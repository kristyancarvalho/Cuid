import styles from './index.module.css';

export function NurseryCard() {
    return (
        <div className={styles.container}>
            <img src="/lar.jpg" alt="lar"/>

            <span>Creche para idosos</span>
        </div>
    );
}