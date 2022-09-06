import styles from "../../../components/Guide/styles.module.scss";

export default function guideThree() {
  return (
    <section>
      <span className="title">GUIA RÁPIDO</span>
      <p className="subtitle">Direito à gratuidade do transporte</p>

      <div className={styles.guideContent}>
        <p>
          No perímetro urbano de Catalão e para os distritos (Pires Belo e Santo
          Antônio do Rio Verde), há leis aprovadas pela Câmara Municipal que
          concedem direito à gratuidade ou desconto de 50% nas passagens do
          transporte coletivo. São elas:
        </p>
        <p>
          <strong>
            Lei 3.966 do dia 6 de abril de 2022 (Subsídio ao transporte
            público):{" "}
          </strong>
          somente para idosos, estudantes e pessoas portadoras de necessidades
          especiais.
        </p>

        <p>
          <strong>
            Lei 1.741 de 2 de março de 1999/ A Lei 2.024, de 25 de junho de
            2002:{" "}
          </strong>
          cobrança de 50% a alunos do ensino público, conveniado e privado no
          município.
        </p>

        <p>
          <strong>Lei 1.761 1 de junho de 1999: </strong>
          gratuidades para deficientes físicos, visuais, surdos e mudos de
          nascimento e mentais.
        </p>

        <p>
          <strong>Lei 2.931 de 7 de julho de 2012: </strong>
          aos filiados da Associação de Pessoas Portadoras de Deficiência de
          Catalão – ASPDEC.
        </p>

        <p>
          <strong>Lei 1.979, de 22 de fevereiro de 2002: </strong>
          dispensa pagamento de passagens de transporte municipais mulheres
          grávidas (assistidas pelo SUS). Ficam limitadas a 2 mulheres a serem
          transportadas por ônibus.
        </p>

        <p>
          <strong>Lei 2.404 de 7 de agosto de 2006: </strong>
          gratuidade para integrantes da Polícia Militar, do Corpo de Bombeiros
          Militar, da Polícia Civil e do Agentes Prisionais.
        </p>
        <article>
          <span>Observação</span>
          <p>
            Como não há uma lei municipal exclusiva para idosos, valem as regras
            da Lei Federal. A gratuidade ocorre a partir dos 65 anos e é preciso
            identificação para ter direito ao transporte gratuito. O mesmo
            ocorre com criança, que tem sua gratuidade permitida até os 5 anos e
            não pode ocupar lugar no assento do transporte.
          </p>
        </article>
      </div>
    </section>
  );
}
