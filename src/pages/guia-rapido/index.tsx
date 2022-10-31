import Link from "next/link";

import styles from "./styles.module.scss";
import { CreditCard, DollarSign, Map, PhoneCall } from "react-feather";

export default function quickGuide() {
  return (
    <section className={styles.guideContainer}>
      <span className={styles.guideHeader}>
        Guia rápido do transporte urbano
      </span>

      <div className="listGuide">
        <Link href="/guia-rapido/recarregar-cartao">
          <div className="card">
            <article>
              <CreditCard />
              <p>Como recarregar o cartão</p>
            </article>
            <p>Saiba mais</p>
          </div>
        </Link>

        <Link href="/sap-ouvidoria">
          <div className="card">
            <article>
              <PhoneCall />
              <p>Serviço de Atendimento do Passageiro (SAP)/Ouvidoria</p>
            </article>
            <p>Saiba mais</p>
          </div>
        </Link>

        <Link href="/guia-rapido/transporte-gratuito">
          <div className="card">
            <article>
              <DollarSign />
              <p>Direito à gratuidade do transporte</p>
            </article>
            <p>Saiba mais</p>
          </div>
        </Link>

        <Link href="/guia-rapido/rotas">
          <div className="card">
            <article>
              <Map />
              <p>Mapa das rotas</p>
            </article>
            <p>Saiba mais</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
