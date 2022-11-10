import Image from "next/image";
import styles from "../Banner/styles.module.scss";

import centro from "../../../public/foto_home.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <p className={styles.tag}>Fretamento Executivo, Transporte e Turismo</p>
        <p className={styles.featuredPhrase}>
          Grupo Transduarte, mais de 42 anos de experiência!
        </p>
        <p>0
          Somos uma empresa com base sólida e desempenho crescente em Catalão.
          Contamos com uma frota de 162 veículos e 183 colaboradores para
          desenvolver constantemente a melhor formar de lhe atender.
        </p>
        <article>
          <Link href='/ouvidoria'>Ouvidoria</Link>
          <Link href='http://00347.itstransdata.com:34701/TDMaxWebCommerce/Default.aspx'>Comprar Passagem </Link>
        </article>
      </div>
      <div className={styles.bannerImage}><Image src={centro} alt="" /></div>
    </section>
  );
}
