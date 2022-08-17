import styles from "./styles.module.scss";

export default function publicTransportNumber() {
  return (
    <section>
      <span className="title">TRANSPORTE URBANO</span>
      <div className={styles.publicTransportContainer}>
        <span>Números do transporte coletivo</span>
        <p>
          Como concessionária do serviço público de transporte coletivo em
          Catalão, a Transduarte apresenta mensalmente números relativos às
          viagens no perímetro urbano:
        </p>
      </div>

      <div className={styles.calendarContainer}></div>
    </section>
  );
}
