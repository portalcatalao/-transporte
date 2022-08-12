import styles from "../Flag/styles.module.scss";

export default function Flag() {
  return (
    <div className={styles.flagContainer}>
      <p>Saiba mais sobre nossos serviços</p>
      <button>Faça um orçamento</button>
    </div>
  );
}
