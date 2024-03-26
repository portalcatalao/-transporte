import styles from "./styles.module.scss";
import global from "../../../styles/global.module.scss";
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

      <div>
        <ul className={global.breadcrumb}>
          <li><a href="http://transduartego.com.br/">Home</a></li>
          <li>Contato</li>
        </ul>
      </div>


      <section className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <span>FALE CONOSCO</span>
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
                <p>(64) 3411-3155 - Portaria</p>
              </article>

              <article>
                <Phone />
                <p>(64) 3441-4281 - Escritório</p>
              </article>

              <article>
                <Phone />
                <p>(64) 9 8441-1188 - Plantão 24h</p>
              </article>
              <article>
                <Phone />
                <p>(64) 9 9329-7997 - Orçamento e Comercial</p>
              </article>
              <article>
                <Phone />
                <p>(64) 3442-8875 - Terminal</p>
              </article>

              <article>
                <Mail />
                <p>atendimento@transduartego.com.br</p>
              </article>
            </div>
            <div>
              <span>Redes sociais</span>
              <Link href="https://www.facebook.com/people/Transduarte-Fretamento-E-Turismo/100067150343262/">
                <article>
                  <Facebook />
                  <p>Facebook</p>
                </article>
              </Link>

              <Link href="https://www.instagram.com/transduartego/">
                <article>
                  <Instagram />
                  <p>Instagem</p>
                </article>
              </Link>

              <Link href="https://www.linkedin.com/in/grupo-transduarte-catal%C3%A3o-57a157248/?originalSubdomain=br">
                <article>
                  <Linkedin />
                  <p>Linkedin</p>
                </article>
              </Link>
            </div>
          </div>
          <div className={styles.location}>
            <iframe style={{
              width: '100%',
              height: '100%',
              border: 0,
            }} id="gmap_canvas" src="https://maps.google.com/maps?q=transduarte%20catalao&t=&z=15&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
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
