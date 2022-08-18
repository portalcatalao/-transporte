import Image from "next/image";
import { Mail, MapPin, Phone } from "react-feather";
import styles from "../Place/styles.module.scss";

export default function Place() {
  return (
    <div className={styles.placeContainer}>
      <div className={styles.titlePlace}>
        <p>LOCALIZAÇÃO</p>
        <span>ONDE ATUAMOS</span>
      </div>
      <div className={styles.place}>
        <Image src="/cities.png" alt="" />
        <div className={styles.card}>
          <p>
            Hoje são 162 veículos transportando cerca de 4 mil passageiros por
            dia na região sudeste de Goiás, atendendo as populações de Catalão,
            Goiandira, Três Ranchos, Cumari e Anhanguera.
          </p>
          <article className={styles.contact}>
            <span>Garagem</span>
            <div>
              <MapPin />
              <p>Avenida VB 1 - Vereda Buritis Catalão/GO</p>
            </div>
            <div>
              <Phone />
              <p>(64)3411-3155</p>
            </div>

            <div>
              <Mail />
              <p>contato@transduartego.com.br</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
