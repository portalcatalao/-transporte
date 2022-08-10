import styles from "../Footer/styles.module.scss";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";

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
              conforto. 🚌
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
            <a href="/">A Empresa</a>
            <span>•</span>
            <a href="">Transporte urbano</a>
            <span>•</span>
            <a href="">Fretamento e Turismo</a>
            <span>•</span>
            <a href="">Contato</a>
            <span>•</span>
            <a href="">contato@transduartego.com.br</a>
          </div>
          <div className={styles.socialMedia}>
            <Facebook width={24} height={24} />
            <Instagram width={24} height={24} />
            <Linkedin width={24} height={24} />
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        <p>© 2002-2022 PortalCatalão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
