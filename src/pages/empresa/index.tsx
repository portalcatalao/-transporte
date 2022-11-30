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
        <span>Nossa família transportando sua família</span>
        <div>
          <p>

            <Image src={img} alt="" className={styles.fl} />


            O Grupo Transduarte, formado pelas empresas Transduarte, Eldorado Turismo e Ibistur Transporte e Turismo, é administrado por Vivian Duarte desde o falecimento de seu pai, Dorivan Antônio Duarte.
            <br /><br />
            Vivian está no Grupo Transduarte desde os 12 anos. Começou limpando o escritório. Depois, tornou-se responsável por carimbar blocos de passagem. Com mais experiência, aos 17 anos, foi promovida de cargo no setor financeiro. Após o casamento, engravidou e, nessa nova fase da vida, Vivian decidiu abraçar a profissão de motorista de ônibus.
            <br /><br />
            Hoje, além de se orgulhar da sua história, sente-se realizada com sua profissão, principalmente por ser a sucessora empresarial e guardiã do legado de seu saudoso pai e dos negócios da família. 
            <br /><br />
            O Grupo Transduarte está há 42 anos no mercado e, atualmente, 3% de suas atividades empresariais são voltadas para transporte público urbano. Já os outros 97% de sua atuação empresarial são reservados ao transporte particular de trabalhadores de empresas parceiras, bem como ao setor de turismo (nacional e internacional).
            <br /><br />
            Para continuar a atender o mercado com qualidade e conforto, o Grupo Transduarte conta na frota com ônibus, micro-ônibus e vans, além de automóveis de passeio para fretamento e turismo. 
            <br /><br />
            Investimos em modernização dos veículos para maior segurança nas viagens. Mas o principal foco é o material humano, pois temos a certeza de que é nossa família transportando sua família.
            <br /><br />
            <h3>Vivian Duarte<br />Presidente do Grupo Transduarte</h3>
          </p>

        </div>
      </section>
    </>
  );
}
