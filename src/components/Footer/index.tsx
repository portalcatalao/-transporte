import styles from "../Footer/styles.module.scss";
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
        <img src="logo.png" alt="" />
        <p>
          A Transduarte é uma empresa focada em atender os usuários de
          transporte coletivo de Catalão com segurança, pontualidade e conforto.
        </p>
        <article className={styles.contact}>
          <span>Administração/Garagem</span>
          <div>
            <MapPin />
            <p>Avenida VB 1 - Vereda Buritis Catalão/GO</p>
          </div>
          <div>
            <Phone />
            <p>(64) 3411-3155</p>
          </div>

          <div>
            <Mail />
            <p>atendimento@transduartego.com.br</p>
          </div>
        </article>
      </div>

      <div className={styles.footerCopyright}>
        <div className={styles.links}>
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

          <p>atendimento@transduartego.com.br</p>

          <div>
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
        <div className={styles.copyright}>
          <span>PUBLICADO EM 2022</span>
          <span>Portal Catalão</span>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
