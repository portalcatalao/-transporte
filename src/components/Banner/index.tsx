import styles from "../Banner/styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <article>
        <div className={styles.headerBanner}>
          <span>Grupo Transduarte</span>
          <p>Fretamento executivo e transporte coletivo.</p>
        </div>
        <p>
          Somos uma empresa com base sólida e desempenho crescente em Catalão.
          Contamos com uma frota de 162 veículos e 183 colaboradores para
          desenvolver constantemente a melhor formar de lhe atender.
        </p>
        <div className={styles.logotipo}>
          <img src="/banner/gt-1.png" alt="Logotipo do Grupo Transduarte" />
          <img src="/banner/gt-2.png" alt="Logotipo do Grupo Transduarte" />
        </div>
      </article>
    </div>
  );
}
