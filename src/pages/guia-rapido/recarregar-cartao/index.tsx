import Link from "next/link";
import { DollarSign, Map, PhoneCall } from "react-feather";
import styles from "./styles.module.scss";
import global from "../../../../styles/global.module.scss";

export default function guideOne() {
  return (
    <>
      
      <div>
    <ul className={global.breadcrumb}>
    <li><a href="http://transduartego.com.br/">Home</a></li>
      <li><a href="../guia-rapido">Guias e Rotas</a></li>
      <li>Como recarregar o cartão</li>
    </ul>
    </div>
      <section className={styles.rechargeContainer}>
        <div className={styles.rechargeContent}>
          <div className={styles.formsPurchase}>
            <article>
              <p className={styles.option}>1</p>
              <div className={styles.infos}>
                <span>No terminal</span>
                <p>
                  Avenida Raulina Fonseca Paschoal, 571 Centro - Catalão/GO.
                </p>
              </div>
            </article>

            <article>
              <p className={styles.option}>2</p>
              <div className={styles.infos}>
                <span>Pelo telefone</span>
                <p>(64) 3442-8875</p>
              </div>
            </article>

            <article>
              <p className={styles.option}>3</p>
              <div className={styles.infos}>
                <span>Pela internet</span>
                <Link href="https://max00347.itstransdata.com/TDMaxwebcommerce/">
                  <button>Comprar online</button>
                </Link>
              </div>
            </article>
          </div>

          <div className={styles.imageContent}>
            <img src="../recarga.png" alt="" />
          </div>
        </div>
      </section>

      <section className="guideContainer">
        <span>Acesse também</span>

        <div className="listGuide">
          <Link href="sap-ouvidoria">
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
