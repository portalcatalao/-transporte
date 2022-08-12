import styles from "../Banner/styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <article>
        <div>
          <span>Grupo Transduarte</span>
          <p>Fretamento executivo e transporte coletivo.</p>
        </div>
        <p>
          Somos uma empresa com base sólida e desempenho crescente em Catalão.
          Contamos com uma frota de 162 veículos e 183 colaboradores para
          desenvolver constantemente a melhor formar de lhe atender.
        </p>
      </article>
    </div>
  );
}
