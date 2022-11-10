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
          <span>Há 42 anos atendendo com qualidade</span>
          <p>
            Com foco em atender os usuários de transporte coletivo de Catalão
            com segurança, pontualidade e conforto.
          </p>
        </article>

        <div>
          <article>
            <div>
              <Users />
            </div>
            <span>+200 mil passageiros no mês</span>
          </article>
          <article>
            <div>
              <Users />
            </div>
            <span>+160 veículos em sua frota</span>
          </article>
          <article>
            <div>
              <Briefcase />
            </div>
            <span>+180 colaboradores</span>
          </article>
        </div>
      </div>

      <div className={styles.valuesCompany}>
        <div className={styles.card}>
          <span>Missão</span>
          <p>
            Nossa missão é transportar pessoas com serviços de qualidade e
            segurança, promovendo assim a satisfação dos nossos clientes, seja
            ele usuário do transporte urbano, de fretamento e turismo.
          </p>
        </div>
        <div className={styles.card}>
          <span>Visão</span>
          <p>
            Ser referência em qualidade, agilidade, segurança e pronto
            atendimento no que se refere ao serviço de transporte de
            passageiros, sendo assim reconhecida nacionalmente no segmento de
            transporte urbano, fretamento e turismo.
          </p>
        </div>
        <div className={styles.card}>
          <span>Valores</span>
          <p>
            Nossos valores se direcionam à responsabilidade no cumprimento do
            nosso compromisso, respeito ao nosso clientes e colaboradores,
            parceria e constante renovação priorizando sempre a demanda do
            mercado do ramo de transporte.
          </p>
        </div>
        <div className={styles.imageCard}>
          <img src="company.png" alt="" className={styles.imageCard} />
        </div>
      </div>
    </section></div>
  );
}
