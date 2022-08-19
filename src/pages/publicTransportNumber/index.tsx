import { ChevronLeft, ChevronRight } from "react-feather";
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

      <div className={styles.calendarContainer}>
        <div className={styles.headerCalendar}>
          <ChevronLeft />
          <span>2022</span>
          <ChevronRight />
        </div>
        <div className={styles.bodyCalendar}>
          <div>
            <span>Janeiro</span>
            <span>Fevereiro</span>
            <span>Março</span>
          </div>
          <div>
            <span>Abril</span>
            <span>Maio</span>
            <span>Junho</span>
          </div>
          <div>
            <span>Julho</span>
            <span>Agosto</span>
            <span>Setembro</span>
          </div>
          <div>
            <span>Outubro</span>
            <span>Novembro</span>
            <span>Dezembro</span>
          </div>
        </div>
      </div>
    </section>
  );
}
