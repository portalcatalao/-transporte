import Link from "next/link";
import { DownloadCloud, CreditCard, PhoneCall, Map } from "react-feather";
import styles from "./styles.module.scss";

export default function guideThree() {
  return (
    <>
      <section className={styles.transportContainer}>
        <span className="title">
          Direito à gratuidade do transporte público
        </span>

        <div className={styles.transportContent}>
          <p>
            No perímetro urbano de Catalão e para os distritos (Pires Belo e
            Santo Antônio do Rio Verde), há leis aprovadas pela Câmara Municipal
            que concedem direito à gratuidade ou desconto de 50% nas passagens
            do transporte coletivo. São elas:
          </p>
          <h1>
            Lei 3.966 do dia 6 de abril de 2022 (Subsídio ao transporte
            público):{" "}
            <span>
              somente para idosos, estudantes e pessoas portadoras de
              necessidades especiais.
            </span>
          </h1>

          <h1>
            Lei 1.741 de 2 de março de 1999/ A Lei 2.024, de 25 de junho de
            2002:{" "}
            <span>
              cobrança de 50% a alunos do ensino público, conveniado e privado
              no município.
            </span>
          </h1>

          <h1>
            Lei 1.761 1 de junho de 1999:{" "}
            <span>
              gratuidades para deficientes físicos, visuais, surdos e mudos de
              nascimento e mentais.
            </span>
          </h1>

          <h1>
            Lei 2.931 de 7 de julho de 2012:{" "}
            <span>
              aos filiados da Associação de Pessoas Portadoras de Deficiência de
              Catalão – ASPDEC.
            </span>
          </h1>

          <h1>
            Lei 1.979, de 22 de fevereiro de 2002:{" "}
            <span>
              dispensa pagamento de passagens de transporte municipais mulheres
              grávidas (assistidas pelo SUS). Ficam limitadas a 2 mulheres a
              serem transportadas por ônibus.
            </span>
          </h1>

          <h1>
            Lei 2.404 de 7 de agosto de 2006:{" "}
            <span>
              gratuidade para integrantes da Polícia Militar, do Corpo de
              Bombeiros Militar, da Polícia Civil e do Agentes Prisionais.
            </span>
          </h1>

          <article className={styles.remark}>
            <span>Observação</span>
            <p>
              Como não há uma lei municipal exclusiva para idosos, valem as
              regras da Lei Federal. A gratuidade ocorre a partir dos 65 anos e
              é preciso identificação para ter direito ao transporte gratuito. O
              mesmo ocorre com criança, que tem sua gratuidade permitida até os
              5 anos e não pode ocupar lugar no assento do transporte.
            </p>
          </article>

          <div className={styles.laws}>
            <p>Se desejar acessar as Leis, faça o download abaixo:</p>

            <div>
              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 3.966 </span>
                </article>
              </Link>

              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 1.741</span>
                </article>
              </Link>

              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 1.761</span>
                </article>
              </Link>

              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 2.931</span>
                </article>
              </Link>

              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 2.404</span>
                </article>
              </Link>

              <Link href="www.google.com">
                <article>
                  <DownloadCloud />
                  <span>Lei 1.979</span>
                </article>
              </Link>
            </div>
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

          <Link href="/sap-ouvidoria">
            <div className="card">
              <article>
                <PhoneCall />
                <p>Serviço de Atendimento do Passageiro (SAP)/Ouvidoria</p>
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
