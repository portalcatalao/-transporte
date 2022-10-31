import styles from "../Banner/styles.module.scss";

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <p className={styles.tag}>Fretamento executivo e transporte coletivo</p>
        <p className={styles.featuredPhrase}>
          Mais de 40 anos de experiência no mercado de transporte e turismo!
        </p>
        <p>
          Somos uma empresa com base sólida e desempenho crescente em Catalão.
          Contamos com uma frota de 162 veículos e 183 colaboradores para
          desenvolver constantemente a melhor formar de lhe atender.
        </p>
        <article>
          <button>Conheça nossa frota</button>
          <button>Conheça nossos serviços</button>
        </article>
      </div>
      <div className={styles.bannerImage}>container</div>
    </section>
  );
}
