import Link from "next/link";
import Useful from "../../components/Useful";
import styles from "./styles.module.scss";
import global from "../../../styles/global.module.scss";
export default function Ombudsman() {
  return (
    <>

<div>
    <ul className={global.breadcrumb}>
      <li><a href="http://transduartego.com.br/">Home</a></li>
      <li>Ouvidoria</li>
    </ul>
    </div>


      <section className={styles.ombudsmanContainer}>
        <article className={styles.titleOmbudsman}>
          <span>Ouvidoria</span>
          <p>
            Serviço exclusivo para: Resolver solicitações que não foram
            atendidas pelo SAP (Serviço de Atendimento ao Passageiro).
          </p>
          <p>
            Pedimos 48 horas para apuração do fato, a partir do momento do
            contato, exceto sábado, domingo e feriado.{" "}
          </p>
          <p>
            Para reclamação na Ouvidoria, é preciso ter o número do protocolo do
            SAP.
          </p>
        </article>
        <div className={styles.ombudsmanContent}>
          <article>
            <span>Horário</span>

            <div>
              <h1>
                <span>Funcionamento:</span> segunda-feira a sexta-feira (exceto
                feriado)
              </h1>
              <h1>
                <span>Horário:</span> 8h às 18h (exceto feriado)
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
                <span>E-mail:</span> ouvidoria@transduartego.com.br
              </h1>
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
                <label htmlFor="">Número do protoloco SAP</label>
                <input type="text" placeholder="Protoloco SAP" />
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
    </>
  );
}
