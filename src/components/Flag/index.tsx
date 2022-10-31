import { ArrowUpRight } from "react-feather";
import styles from "../Flag/styles.module.scss";

export default function Flag() {
  return (
    <div className={styles.flagContainer}>
      <div>
        <p>Saiba mais sobre nossos serviços</p>
        <ArrowUpRight />
      </div>
      <button>Faça um orçamento</button>
    </div>
  );
}
