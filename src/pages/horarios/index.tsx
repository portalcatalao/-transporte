// pages/horarios.js

import Link from "next/link";
import styles from "./styles.module.scss";
import globalStyles from "../../../styles/global.module.scss"; // Importação dos estilos globais

export default function Horarios() {
  return (
    <div className={globalStyles.container}> {/* Adaptação para o estilo global */}
      <ul className={globalStyles.breadcrumb}>
        <li><Link href="http://transduartego.com.br/">Home</Link></li>
        <li>Horários</li>
      </ul>

      <section className={styles.horariosContainer}>
        <div className={styles.horarioItem}>
          <h3>HORÁRIOS GUARDA-MOR</h3>
          <p><strong>SEGUNDA / SEXTA</strong></p>
          <p>CATALÃO X GUARDA-MOR: 07:30 HRS</p>
          <p><strong>SÁBADOS</strong></p>
          <p>CATALÃO X GUARDA-MOR: 15:00 HRS</p>
          <p><strong>SEGUNDA / SEXTA</strong></p>
          <p>GUARDA-MOR X CATALÃO: 14:30 HRS</p>
          <p><strong>DOMINGOS</strong></p>
          <p>GUARDA-MOR X CATALÃO: 14:30</p>
        </div>

        <div className={styles.horarioItem}>
          <h3>HORÁRIOS SANTO ANTÔNIO</h3>
          <p><strong>Segunda a sexta-feira</strong></p>
          <p>Catalão x Santo Antônio: 09:30 / 15:30 hrs</p>
          <p>Santo Antônio x Catalão: 06:00 / 12:00 hrs</p>
          <p><strong>Sábado</strong></p>
          <p>Não haverá transporte para Santo Antônio</p>
          <p><strong>Domingo</strong></p>
          <p>Não haverá transporte para Santo Antônio</p>
        </div>

        <div className={styles.horarioItem}>
          <h3>HORÁRIOS GOIANDIRA</h3>
          <p><strong>Segunda à sexta-feira</strong></p>
          <p>Goiandira x Catalão (06:20/07:30/11:00/16:00/17:00)</p>
          <p>Catalão x Goiandira (07:00/09:00/12:30/16:30/18:00)</p>
          <p><strong>Sábado</strong></p>
          <p>Goiandira x Catalão (06:10/12:00/17:30)</p>
          <p>Catalão x Goiandira (07:00/12:30/18:00)</p>
        </div>

        <div className={styles.horarioItem}>
          <h3>LINHA CAMPO ALEGRE</h3>
          <p><strong>SEGUNDA À SEXTA (E FERIADOS) - CAMPO ALEGRE X CATALÃO</strong></p>
          <p>06:30 HRS</p>
          <p><strong>SEGUNDA À SEXTA (E FERIADOS) - CATALÃO X CAMPO ALEGRE</strong></p>
          <p>14:45 HRS</p>
          <p><strong>SÁBADO - CAMPO ALEGRE X CATALÃO</strong></p>
          <p>06:30 HRS</p>
          <p><strong>SÁBADO - CATALÃO X CAMPO ALEGRE</strong></p>
          <p>12:45 HRS</p>
          <p><strong>DOMINGO - CATALÃO X CAMPO ALEGRE</strong></p>
          <p>14:45 HRS</p>
        </div>

        <div className={styles.horarioItem}>
          <h3>LINHA CRISTALINA</h3>
          <p><strong>SEGUNDA / QUARTA / SEXTA / SABADO / DOMINGO</strong></p>
          <p>CATALÃO X CRISTALINA – 07:00</p>
          <p><strong>SEGUNDA / QUARTA / SEXTA / SABADO / DOMINGO</strong></p>
          <p>CRISTALINA X CATALÃO – 16:00</p>
        </div>
      </section>
    </div>
  );
}
