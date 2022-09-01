import Image from "next/image";
import styles from "../../../components/Guide/styles.module.scss";

export default function guideFour() {
  return (
    <section>
      <span className="title">GUIA RÁPIDO</span>
      <p className="subtitle">Mapa das rotas</p>

      <div className={styles.guideContent}>
        <Image
          src="/map-route.png"
          alt="Imagem de uma rota no mapa em um celular"
        />
        <button>Download</button>
      </div>
    </section>
  );
}
