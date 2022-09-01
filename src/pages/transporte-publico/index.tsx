import Link from "next/link";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "./styles.module.scss";

export default function PublicTransportNumber() {
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
        <div className={styles.calendarContent}>
          <div className={styles.headerCalendar}>
            <Link href="/">
              <button>
                <ChevronLeft />
              </button>
            </Link>
            <span>2022</span>
            <Link href="/">
              <button>
                <ChevronRight />
              </button>
            </Link>
          </div>
          <div className={styles.bodyCalendar}>
            <div>
              <button>Janeiro</button>
              <button>Fevereiro</button>
              <button>Março</button>
            </div>
            <div>
              <button>Abril</button>
              <button>Maio</button>
              <button>Junho</button>
            </div>
            <div>
              <button>Julho</button>
              <button>Agosto</button>
              <button>Setembro</button>
            </div>
            <div>
              <button>Outubro</button>
              <button>Novembro</button>
              <button>Dezembro</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
