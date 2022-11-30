import { Briefcase, Truck, Users } from "react-feather";
import styles from "../Company/styles.module.scss";

export default function Company() {
  return (
    <div className={styles.gray}>

      <section className={styles.companyContainer}>
        <div className={styles.aboutCompany}>
          <p>NOSSA EMPRESA</p>
          <p className={styles.nameCompany}>Grupo Transduarte</p>
          <p><img src="grupo.png" alt="" width="100%" className={styles.logos} /></p>
          <article className={styles.about}>
            <span>Qualidade e segurança</span>
            <p>Em 1980, o Grupo Transduarte iniciou suas atividades com o transporte público em Catalão (GO) com apenas quatro ônibus. Em mais de quatro décadas, crescemos, diversificamos os serviços e ganhamos novas empresas (Eldorado Turismo e Ibistur Transporte e Turismo). Mas não perdemos nosso foco: atender o cliente com segurança, pontualidade e conforto.</p>
          </article>

          <div>
            <article>
              <div>
                <Users />
              </div>
              <span>100 mil passageiros mês</span>
            </article>
            <article>
              <div>
                <Users />
              </div>
              <span>110 veículos em sua frota</span>
            </article>
            <article>
              <div>
                <Briefcase />
              </div>
              <span>+ 180 colaboradores</span>
            </article>
          </div>
        </div>

        <div className={styles.valuesCompany}>
          <div className={styles.card}>
            <span>Missão</span>
            <p>
              Atender às necessidades de nossos clientes com o objetivo de superar suas expectativas de conforto, qualidade, pontualidade e segurança. Trabalhar com ética e responsabilidade.
            </p>
          </div>
          <div className={styles.card}>
            <span>Visão</span>
            <p>
              Ser a melhor empresa na prestação de serviço de transporte de pessoas. Queremos ainda fazer a diferença na vida de nossos clientes na escolha consciente e sustentável.
            </p>
          </div>
          <div className={styles.card}>
            <span>Valores</span>
            <p>
              Nossos valores se direcionam à Respeitar as individualidades, agir com honestidade, buscar sempre a eficiência, valorizar quem faz a nossa empresa e cuidar do meio ambiente.
            </p>
          </div>
          <div className={styles.imageCard}>
            <img src="company.png" alt="" className={styles.imageCard} />
          </div>
        </div>
      </section></div>
  );
}
