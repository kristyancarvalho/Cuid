import styles from './index.module.css';

export function BabysittersCard() {
    return (
        <div className={styles.container}>
            <img src="/baba.jpg" alt="babas"/>

            <span>Babás</span>
        </div>
    );
}