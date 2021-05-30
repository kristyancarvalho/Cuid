import styles from './index.module.css';

export function CaregiverCard() {
    return (
        <div className={styles.container}>
            <img src="/ocupacional.jpg" alt="ocupacional"/>

            <span>Cuidadores de idosos</span>
        </div>
    );
}