// import styles from "../../components/Guide/styles.module.scss";

import Link from "next/link";
import styles from "../../components/Guide/styles.module.scss";
import guideOne from "./guideOne";

export default function quickGuide() {
  return (
    <section>
      <span className="title">TRANSPORTE URBANO</span>
      <p className="subtitle">GUIA RÁPIDO</p>

      <div className={styles.listGuide}>
        <Link href="/quickGuide/guideOne">
          <article>
            <span>1</span>
            <p>Como recarregar o cartão</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/quickGuide/guideTwo">
          <article>
            <span>2</span>
            <p>Criação do SAP</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/quickGuide/guideThree">
          <article>
            <span>3</span>
            <p>Direito à gratuidade do transporte</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/quickGuide/guideFour">
          <article>
            <span>4</span>
            <p>Mapa das rotas</p>
            <p>Saiba mais</p>
          </article>
        </Link>
      </div>
    </section>
  );
}
