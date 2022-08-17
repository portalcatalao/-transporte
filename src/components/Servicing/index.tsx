import styles from "./styles.module.scss";

export default function Servicing() {
  return (
    <section>
      <div className={styles.servicingContainer}>
        <div className={styles.titleServicing}>
          <p>O QUE FAZEMOS</p>
          <span>NOSSOS SERVIÇOS</span>
        </div>

        <div className={styles.listServicing}>
          <div className={styles.card}>
            <span>Fretamento executivo</span>

            <div className={styles.cardBody}>
              <img src="/bus-1.png" alt="" />
              <p>
                Oferecemos o serviço de fretamentos para empresas, faculdades e
                turismo. Dispomos de carros de pequeno porte, vans e
                micro-ônibus e ônibus.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <a href="">Saiba mais</a>
            </div>
          </div>
          <div className={styles.card}>
            <span>Transporte coletivo</span>

            <div className={styles.cardBody}>
              <img src="/bus-2.png" alt="" />
              <p>
                Realizamos serviços de transporte coletivo de passageiros no
                município de Catalão, nas categorias urbana e rural além de
                serviços suburbanos, serviços de transporte de passageiros a
                diversas empresas e serviços rodoviários, que atendem a 5
                municípios próximos à Catalão.
              </p>
            </div>

            <div className={styles.cardFooter}>
              <a href="">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
