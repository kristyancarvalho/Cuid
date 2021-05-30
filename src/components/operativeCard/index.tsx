import styles from './index.module.css';

export function OperativeCard() {
    return (
        <div className={styles.container}>
            <img src="/cuidadores.jpg" alt="lar"/>

            <span>Cuidados pós-operatório</span>
        </div>
    );
}