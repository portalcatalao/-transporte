import styles from "../Header/styles.module.scss";

import { Facebook, Instagram, Linkedin } from "react-feather";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo.svg" alt="logo transduarte" />
        <nav>
          <a>A Empresa</a>
          <a>Transporte urbano</a>
          <a>Fretamento e Turismo</a>
          <a>Contato</a>

          <div className={styles.socialMedia}>
            <Facebook width={24} height={24} />
            <Instagram width={24} height={24} />
            <Linkedin width={24} height={24} />
          </div>
        </nav>
      </div>
    </header>
  );
}
