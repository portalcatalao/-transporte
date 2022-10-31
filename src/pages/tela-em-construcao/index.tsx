import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.scss";

export default function TelaEmConstrucao() {
  const [date, setDate] = useState([new Date(2022, 1, 1)]);
  return (
    <section className={styles.calendarContainer}>
      <div className={styles.calendarContent}>
        <Calendar
          onChange={setDate}
          value={date}
          maxDetail="year"
          maxDate={new Date()}
          minDate={new Date(2022, 1, 1)}
          next2Label=">>"
          next2AriaLabel="Próximo ano"
          prev2Label="<<"
          prev2AriaLabel="Ano anterior" // will not allow date before 1st July 2015
        />
      </div>
      <div className={styles.calendarResult}>
        <article>
          <span>Anual</span>
          <p>
            <strong>Total de viagem: </strong> 320
          </p>
          <p>
            <strong>Km rodados: </strong> 320.000
          </p>
          <p>
            <strong>Total de passageiros: </strong> 32
          </p>
          <p>
            <strong>Gratuidades: </strong> 32.000
          </p>
        </article>
        <article>
          <span>Anual</span>
          <p>
            <strong>Total de viagem: </strong> 320
          </p>
          <p>
            <strong>Km rodados: </strong> 320.000
          </p>
          <p>
            <strong>Total de passageiros: </strong> 32
          </p>
          <p>
            <strong>Gratuidades: </strong> 32.000
          </p>
        </article>

        <button type="submit">Baixar prestação de contas</button>
      </div>
    </section>
  );
}
