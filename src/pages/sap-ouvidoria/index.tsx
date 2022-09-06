import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "react-feather";
import Guide from "../../components/Guide";
import styles from "./styles.module.scss";

export default function SapOmbudsman() {
  return (
    <>
      <section>
        <span className="title">TRANSPORTE URBANO</span>

        <div className={styles.sapContent}>
          <article>
            <span>Serviço de Atendimento do Passageiro/Ouvidoria</span>
            <p>
              Dar opção para Serviço de Atendimento ao Passageiro ou Ouvidoria.
              Dependendo da escolha, aparecem as informações:
            </p>
          </article>

          <article>
            <span>Serviço de Atendimento do Passageiro (SAP)</span>
            <p>
              Serviço exclusivo para: dúvidas e informações sobre como
              recarregar cartão, tarifa, horários e linhas, reclamação, sugestão
              e elogios.
            </p>
            <p>Importante: exija o número do protocolo.</p>
          </article>

          <div>
            <span>Horário</span>

            <p>
              <strong>Funcionamento:</strong> segunda a sexta-feira (exceto
              feriado)
            </p>
            <p>
              <strong>Horário:</strong> 6h às 18h (exceto feriado)
            </p>
          </div>

          <div>
            <span>Contato direto</span>

            <p>
              <strong>Whatsapp:</strong> (64) 98441-2299 (ligação a cobrar: 90 +
              14 + número)
            </p>

            <p>
              <strong>E-mail:</strong> sap@transduartego.com.br
            </p>
            <div className={styles.socialMedia}>
              <p>Redes sociais: </p>
              <div>
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
        </div>

        <div className={styles.ombudsmanContent}>
          <article>
            <span>Ouvidoria</span>
            <p>
              Serviço exclusivo para: Resolver solicitações que não foram
              atendidas pelo SAP (Serviço de Atendimento ao Passageiro).
            </p>
            <p>
              Pedimos 48 horas para apuração do fato, a partir do momento do
              contato, exceto sábado, domingo e feriado.
            </p>
            <p>
              Para reclamação na Ouvidoria, é preciso ter o número do protocolo
              do SAP.
            </p>
          </article>

          <div>
            <span>Horário</span>

            <p>
              <strong>Funcionamento:</strong> segunda a sexta-feira (exceto
              feriado)
            </p>
            <p>
              <strong>Horário:</strong> 8h às 18h (exceto feriado)
            </p>
          </div>

          <div>
            <span>Contato direto</span>

            <p>
              <strong>Whatsapp:</strong> (64) 98441-2299 (ligação a cobrar: 90 +
              14 + número)
            </p>

            <p>
              <strong>E-mail:</strong> ouvidoria@transduartego.com.br
            </p>
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
        </div>

        <div className={styles.usefulInformation}>
          <span>Informações úteis</span>
          <article>
            <span>Achados e Perdidos</span>
            <p>
              Mantemos por um período de 30 dias documentos e objetos
              encontrados dentro dos nossos veículos e/ou no terminal de
              integração. Após esse período, descartamos o material. Quanto aos
              bens não reclamados, esses serão doados ou descartados. Exigir do
              atendente que seja registrado seu pedido de verificação. Na
              retirada, assinar documento referente aos documentos ou objetos.{" "}
            </p>
          </article>

          <article>
            <span>Acidentes</span>
            <p>
              Ao reportar acidentes envolvendo nossos veículos, por favor,
              enviar e-mail para contato@transduartego.com.br. No Assunto do
              e-mail, escrever: Acidente! No corpo do e-mail, se possível enviar
              placa, horário, fotos e local do ocorrido do acidente.
              Obrigatoriamente, conter no e-mail: nome, placa e modelo do
              veículo do outro envolvido no acidente. Evite enviar dados
              desnecessários para nossa apuração do caso.
            </p>
          </article>

          <article>
            <span>Trabalhe conosco</span>
            <p>
              Não use esse espaço para enviar currículo ou consultar sobre
              contratação de nossa empresa. O material será descartado
              automaticamente. Use a sessão Empresa/Trabalhe Conosco. Os
              anúncios de recrutamento de pessoal serão publicados em nossas
              redes sociais: Facebook.com/grupotransduarte e
              Instragram/grupotransduarte.
            </p>
          </article>

          <article>
            <span>Fornecedores</span>
            <p>
              Não use esse espaço para oferecer serviço ou peças à nossa
              empresa. O material será descartado automaticamente. Use a sessão
              Empresa/Cadastro de fornecedores.
            </p>
          </article>
        </div>
      </section>
      <Guide />
    </>
  );
}
