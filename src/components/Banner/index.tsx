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
          Grupo Transduarte<br></br>
          Transportando sua família
        </p>
        <p>O Grupo Transduarte está entre as melhores empresas de transporte de passageiros no Brasil, tanto em transporte público, fretamento ou turismo. Com sede em Catalão (GO), a empresa é reconhecida ainda pelos investimentos em modernização de sua frota para garantir mais conforto e segurança.         </p>
        <article>
          <Link href='/ouvidoria'>SAP</Link>
          <Link href='https://max00347.itstransdata.com/TDMaxwebcommerce/'>Compre sua passagem</Link>
        </article>
      </div>
      <div className={styles.bannerImage}><Image src={centro} alt="" /></div>
    </section>
  );
}
