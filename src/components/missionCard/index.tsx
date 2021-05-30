import styles from './index.module.css';

export function MissionCard() {
    return(
      <div className={styles.mission}>
          <h5>Missão</h5>
          <p>Queremos mudar a forma de como são oferecidos os serviços de cuidados para idosos, tornando esse processo algo mais ágil, simples e confortável possível para as familias.</p>
       </div>
    );
}