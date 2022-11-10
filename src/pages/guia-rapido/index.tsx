import Link from "next/link";
import global from "../../../styles/global.module.scss";
import styles from "./styles.module.scss";
import { CreditCard, DollarSign, Map, PhoneCall } from "react-feather";

export default function quickGuide() {
  return (
    <>
    <div>
    <ul className={global.breadcrumb}>
      <li><a href="http://transduartego.com.br/">Home</a></li>
      <li>Guia rápido do transporte urbano</li>
    </ul>
    </div>
    
    
    <section className={styles.guideContainer}>
      

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

        <Link href="/sap">
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
    </>
  );
}
