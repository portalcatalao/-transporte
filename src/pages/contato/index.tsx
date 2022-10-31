import styles from "./styles.module.scss";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  DollarSign,
  Map,
  PhoneCall,
  CreditCard,
} from "react-feather";

import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <span>CONTATO</span>
          <p>Qual a melhor forma para atendê-lo com eficiência?</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfos}>
            <div>
              <span>Escritório e garagem</span>
              <article>
                <MapPin />
                <p>Avenida VB 1 - Vereda Buritis Catalão/GO</p>
              </article>

              <article>
                <Phone />
                <p>(64)3411-3155</p>
              </article>

              <article>
                <Mail />
                <p>contato@transduartego.com.br</p>
              </article>
            </div>
            <div>
              <span>Redes sociais</span>
              <Link href="/">
                <article>
                  <Facebook />
                  <p>Facebook</p>
                </article>
              </Link>

              <Link href="/">
                <article>
                  <Instagram />
                  <p>Instagem</p>
                </article>
              </Link>

              <Link href="/">
                <article>
                  <Linkedin />
                  <p>Linkedin</p>
                </article>
              </Link>
            </div>
          </div>
          <div className={styles.location}>
            <p>localização</p>
          </div>
        </div>

        <div className={styles.otherInformation}>
          <div>
            <span>Como estou dirigindo?</span>
            <p>SAP/Ouvidoria ou pelo email sac@transduartego.com.br</p>
          </div>
          <div>
            <span>Terminal de integração</span>
            <article>
              <MapPin />
              <p>Av. Raulina Fonseca Paschoal, s/nº, Centro</p>
            </article>
            <article>
              <Phone />
              <p>(64) 3442-8875</p>
            </article>
          </div>
        </div>
      </section>
      <section className="guideContainer">
        <span>Acesse também</span>

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

          <Link href="sap">
            <div className="card">
              <article>
                <PhoneCall />
                <p>Serviço de Atendimento do Passageiro (SAP)</p>
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
