import Link from "next/link";
import { CreditCard, DollarSign, Map, PhoneCall } from "react-feather";
import styles from "../Guide/styles.module.scss";

export default function Guide() {
  return (
    <section className={styles.guideContainer}>
      <span className={styles.title}>GUIA RÁPIDO</span>

      <div className={styles.listGuide}>
        <Link href="/guia-rapido/recarregar-cartao">
          <article>
            <CreditCard />
            <p>Como recarregar o cartão</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guia-rapido/sap-ouvidorias">
          <article>
            <PhoneCall />
            <p>Serviço de Atendimento do Passageiro (SAP)/Ouvidoria</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guia-rapido/transporte-gratuito">
          <article>
            <DollarSign />
            <p>Direito à gratuidade do transporte</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guia-rapido/rotas">
          <article>
            <Map />
            <p>Mapa das rotas</p>
            <p>Saiba mais</p>
          </article>
        </Link>
      </div>
    </section>
  );
}
