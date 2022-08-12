import styles from "../Header/styles.module.scss";

import { Facebook, Instagram, Linkedin } from "react-feather";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo.svg" alt="logo transduarte" />
        <nav>
          <Link href="/">
            <p>A Empresa</p>
          </Link>

          <Link href="/urbanTransport">
            <p>Transporte urbano</p>
          </Link>

          <Link href="/charterAndTourism">
            <p>Fretamento e Turismo</p>
          </Link>

          <Link href="/contact">
            <p>Contato</p>
          </Link>

          <div className={styles.socialMedia}>
            <Link href="/">
              <Facebook />
            </Link>

            <Link href="/">
              <Instagram />
            </Link>

            <Link href="/">
              <Linkedin />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
