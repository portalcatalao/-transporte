import Guide from "../../components/Guide";

import styles from "../../components/Guide/styles.module.scss";

export default function quickGuide() {
  return (
    <section>
      <span className="title">TRANSPORTE URBANO</span>
      <p className="subtitle">GUIA RÁPIDO</p>

      <div className={styles.listGuide}>
        <article>
          <span>1</span>
          <p>Como recarregar o cartão</p>
          <a href="">Saiba mais</a>
        </article>
        <article>
          <span>2</span>
          <p>Criação do SAP</p>
          <a href="">Saiba mais</a>
        </article>
        <article>
          <span>3</span>
          <p>Direito à gratuitdade do transporte</p>
          <a href="">Saiba mais</a>
        </article>
        <article>
          <span>4</span>
          <p>Mapa das rotas</p>
          <a href="">Saiba mais</a>
        </article>
      </div>
    </section>
  );
}
