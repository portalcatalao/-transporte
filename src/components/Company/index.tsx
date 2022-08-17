import { Briefcase, Truck, Users } from "react-feather";
import styles from "./styles.module.scss";

export default function Company() {
  return (
    <section>
      <div className={styles.companyContainer}>
        <div className={styles.aboutCompany}>
          <span>EMPRESA</span>

          <div>
            <p>
              Mais de 40 anos de experiência no mercado de transporte e turismo!
            </p>
            <div className={styles.numbers}>
              <article>
                <Briefcase />
                <span>+180</span>
                <p>Colaboradores</p>
              </article>

              <article>
                <Users />
                <span>+180</span>
                <p>Passageiros por mês</p>
              </article>

              <article>
                <Truck />
                <span>+180</span>
                <p>Veículos</p>
              </article>
            </div>
          </div>
          <img src="/company.png" alt="" />
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
          <img src="/grupo-transduarte.png" alt="" />
        </div>
      </div>
    </section>
  );
}
