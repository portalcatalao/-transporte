import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.scss";
import { api } from "../../services/api";

const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function TelaEmConstrucao() {
  const [date, setDate] = useState<Date>(new Date(2022, 0, 1));
  const [transparency, setTransparency] = useState(null);
  const [yearly, setYearly] = useState(null);

  async function getTransparency() {
    const response = await api.get(`transparency/find-by-date?year=${date.getFullYear()}&month=${date.getMonth()}`).then(res => res.data);
    if (response.success) {
      setTransparency(response.transparency);
      setYearly(response.yearly);
    } else {
      setTransparency(null);
      setYearly(null);
    }
  }

  useEffect(() => {
    getTransparency();
  }, [date]);

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
          <Calendar
            onChange={setDate}
            value={date}
            maxDetail="year"
            maxDate={new Date()}
            minDate={new Date(2022, 0, 1)}
            next2Label=">>"
            next2AriaLabel="Próximo ano"
            prev2Label="<<"
            prev2AriaLabel="Ano anterior" // will not allow date before 1st July 2015
          />
        </div>
        <div className={styles.calendarResult}>
          <div>
            {yearly &&
              <article>
                <span>Anual</span>
                <p>
                  <strong>Total de viagem: </strong> {yearly.total_trip}
                </p>
                <p>
                  <strong>Km rodados: </strong> {yearly.total_mileage}
                </p>
                <p>
                  <strong>Total de passageiros: </strong> {yearly.total_passengers}
                </p>
                <p>
                  <strong>Pagos: </strong> {Number(yearly.total_passengers) - Number(yearly.total_free)}
                </p>
                <p>
                  <strong>Gratuidades: </strong> {yearly.total_free}
                </p>
              </article>
            }
            {transparency &&
              <article>
                <span>{month[date.getMonth()]}</span>
                <p>
                  <strong>Total de viagem: </strong> {transparency.total_trip}
                </p>
                <p>
                  <strong>Km rodados: </strong> {transparency.total_mileage}
                </p>
                <p>
                  <strong>Total de passageiros: </strong> {transparency.total_passengers}
                </p>
                <p>
                  <strong>Pagos: </strong> {Number(transparency.total_passengers) - Number(transparency.total_free)}
                </p>
                <p>
                  <strong>Gratuidades: </strong> {transparency.total_free}
                </p>
              </article>
            }
          </div>
          {transparency?.file &&
            <a href={`https://transduarte.herokuapp.com/${transparency.file}`} target={'_blank'}>Baixar prestação de contas</a>
          }
        </div>
      </div>
    </section>
  );
}
