import Link from "next/link";
import { Facebook, Instagram } from "react-feather";
import { CreditCard, DollarSign, Map, PhoneCall } from "react-feather";
import Useful from "../../components/Useful";
import styles from "./styles.module.scss";
import global from "../../../styles/global.module.scss";
export default function SapOmbudsman() {
  return (
    <>
     <div>
    <ul className={global.breadcrumb}>
      <li><a href="http://transduartego.com.br/">Home</a></li>
      <li>Serviço de Atendimento do Passageiro (SAP)</li>
    </ul>
    </div>

      <section className={styles.sapContainer}>
        <article className={styles.titleSap}>
          
          <p>
            Serviço exclusivo para: dúvidas e informações sobre como recarregar
            cartão, tarifa, horários e linhas, reclamação, sugestão e elogios.
          </p>
          <p>
            <strong>Importante: exija o número do protocolo.</strong>
          </p>
        </article>

        <div className={styles.sapContent}>
          <article>
            <span>Horário</span>

            <div>
              <h1>
                <span>Funcionamento:</span> segunda a sexta-feira
              </h1>
              <h1>
                <span>Horário:</span> 6h às 18h (exceto feriado)
              </h1>
            </div>
          </article>

          <article>
            <span>Contato</span>

            <div>
              <h1>
                <span>WhatsApp:</span> (64) 98441-2299 (ligação a cobrar: 90 +
                14 + número)
              </h1>
              <h1>
                <span>E-mail:</span> sac@transduartego.com.br
              </h1>
              <div className={styles.media}>
                <span>Redes sociais:</span>

                <Link href="https://www.facebook.com/Grupo-Transduarte-103037002518208/">
                  <article>
                    <Facebook />
                    <p>Facebook</p>
                  </article>
                </Link>

                <Link href="https://www.instagram.com/transduartego/">
                  <article>
                    <Instagram />
                    <p>Instagram</p>
                  </article>
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="formContainer">
          <p>Nos envie uma mensagem</p>

          <div className="formContent">
            <div className="formInput">
              <article>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Digite seu nome completo" />
              </article>

              <article>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </article>

              <article>
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder="(64) 9XXXX-XXXX" />
              </article>

              <article>
                <label htmlFor="">Assunto</label>
                <input type="text" placeholder="Assunto" />
              </article>

              <article>
                <label htmlFor="">Mensagem</label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  placeholder="Mensagem"
                />
              </article>

              <article>
                <label htmlFor="">Anexo</label>

                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  accept="image/jpg, image/png"
                  required
                />
              </article>
            </div>

            <Link href="/">
              <button>Enviar mensagem</button>
            </Link>
          </div>
        </div>
      </section>

      <Useful />

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
