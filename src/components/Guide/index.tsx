import Link from "next/link";
import styles from "./styles.module.scss";

export default function Guide() {
  return (
    <section className={styles.guideContainer}>
      <span className={styles.title}>GUIA RÁPIDO</span>

      <div className={styles.listGuide}>
        <Link href="/guideOne">
          <article>
            <span>1</span>
            <p>Como recarregar o cartão</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guideTwo">
          <article>
            <span>2</span>
            <p>Criação do SAP</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guideThree">
          <article>
            <span>3</span>
            <p>Direito à gratuidade do transporte</p>
            <p>Saiba mais</p>
          </article>
        </Link>

        <Link href="/guideFour">
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
