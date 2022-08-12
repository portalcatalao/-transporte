import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
} from "react-feather";
import styles from "../Fleet/styles.module.scss";

export default function Fleet() {
  return (
    <section>
      <div className={styles.fleetContainer}>
        <div className={styles.fleetContent}>
          <div className={styles.fleetTitle}>
            <span>CONHEÇA NOSSA FROTA</span>
            <p>
              Atuamos em todo o Brasil. Faça seu orçamento com nossa empresa.
              Temos ônibus, micro-ônibus e táxi.
            </p>
          </div>
          <div className={styles.controlSwiper}>
            <button>
              <ArrowLeft />
            </button>
            <button>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
