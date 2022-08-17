import styles from "./styles.module.scss";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.topFooter}>
          <article>
            <img src="logo2.svg" alt="" />
            <p>
              A Transduarte é uma empresa focada em atender os usuários de
              transporte coletivo de Catalão com segurança, pontualidade e
              conforto.
            </p>
          </article>

          <article className={styles.contact}>
            <span>Garagem</span>
            <div>
              <MapPin />
              <p>Avenida VB 1 - Vereda Buritis Catalão/GO</p>
            </div>
            <div>
              <Phone />
              <p>(64)3411-3155</p>
            </div>

            <div>
              <Mail />
              <p>contato@transduartego.com.br</p>
            </div>
          </article>
        </div>

        <div className={styles.middleFooter}>
          <div className={styles.links}>
            <Link href="/">
              <p>A Empresa</p>
            </Link>

            <span>•</span>

            <Link href="/urbanTransport">
              <p>Transporte urbano</p>
            </Link>

            <span>•</span>

            <Link href="/charterAndTourism">
              <p>Fretamento e Turismo</p>
            </Link>

            <span>•</span>

            <Link href="/contact">
              <p>Contato</p>
            </Link>

            <span>•</span>

            <p>contato@transduartego.com.br</p>
          </div>
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
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>© Portal Catalão Internet Services.</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
