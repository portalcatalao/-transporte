import Image from "next/image";
import Company from "../../components/Company";
import styles from "./styles.module.scss";
import global from "../../../styles/global.module.scss";
import img from "../../../public/image-4.jpeg";

export default function Enterprise() {
  return (
    <>


    <div>
    <ul className={global.breadcrumb}>
      <li><a href="http://transduartego.com.br/">Home</a></li>
      <li>Empresa</li>
    </ul>
    </div>


      <Company />

      

      <section className={styles.companyContainer}>
        <span>Minha família transportando pessoas</span>
        <div>
          <p>

          <Image src={img} alt=""  className={styles.fl}/>

         
            Quando meu avô, Antônio Miranda, fundou a Transduarte, em 1980,
            meu tio Dorival foi administrar a empresa. Nessa época, o meu pai
            Dorivan era caminhoneiro e vivia na estrada. Às vezes, ele ficava
            até 15 dias sem vir em casa porque estava trabalhando. Até que em
            1988, a pedido do meu avô, meu pai resolveu ficar só na
            administração da empresa.
          <br/><br/>
            O início foi difícil, mas meu pai nunca desistiu. Mesmo com as
            dificuldades, ele era um homem de fé. Sempre pedia a Deus e à Nossa
            Senhora para dar força para vencer. Com a benção de Deus, ele
            conseguiu crescer nossa empresa.
            <br/><br/>
            Infelizmente, em 2019, meu pai descobriu um câncer. Mas, mesmo
            assim, ele não esmoreceu. Sentia as dores da doença, mas continuou a
            trabalhar. Ele não ficava um dia sequer sem vir à empresa. Ele tinha
            paixão pelo que fazia.
            <br/><br/>
            Infelizmente, no dia 18 de julho de 2021, meu pai faleceu. A saudade
            é grande. Mas ele deixou um legado: me ensinou a amar a empresa como
            ele amava. E eu brinco sempre: com a gente, não corre sangue nas
            veias e sim óleo diesel.
            Quero continuar o legado dele: Minha família transportando
            pessoas" <br/><h3>Vivian Aparecida dos Santos Duarte Marçal <br/>Diretora presidente da Transduarte Fretamento e Transporte</h3>
          </p>
          
        </div>
      </section>
    </>
  );
}
