import Company from "../../components/Company";
import styles from "./styles.module.scss";

export default function Enterprise() {
  return (
    <>
      <Company />

      <section className={styles.companyContainer}>
        <span>Minha família transportando pessoas</span>
        <div>
          <p>
            "Quando meu avô, Antônio Miranda, fundou a Transduarte, em 1980, meu
            tio Dorival foi administrar a empresa. Nessa época, o meu pai
            Dorivan era caminhoneiro e vivia na estrada. Às vezes, ele ficava
            até 15 dias sem vir em casa porque estava trabalhando. Até que em
            1988, a pedido do meu avô, meu pai resolveu ficar só na
            administração da empresa.
          </p>
          <p>
            O início foi difícil, mas meu pai nunca desistiu. Mesmo com as
            dificuldades, ele era um homem de fé. Sempre pedia a Deus e à Nossa
            Senhora para dar força para vencer. Com a benção de Deus, ele
            conseguiu crescer nossa empresa.
          </p>
          <p>
            Infelizmente, em 2019, meu pai descobriu um câncer. Mas, mesmo
            assim, ele não esmoreceu. Sentia as dores da doença, mas continuou a
            trabalhar. Ele não ficava um dia sequer sem vir à empresa. Ele tinha
            paixão pelo que fazia.
          </p>
          <p>
            Infelizmente, no dia 18 de julho de 2021, meu pai faleceu. A saudade
            é grande. Mas ele deixou um legado: me ensinou a amar a empresa como
            ele amava. E eu brinco sempre: com a gente, não corre sangue nas
            veias e sim óleo diesel.
          </p>
          <p>
            Quero continuar o legado dele: Minha família transportando pessoas."
          </p>
          <h3>Diretora presidente da Transduarte Fretamento e Transporte</h3>
        </div>
      </section>
    </>
  );
}
