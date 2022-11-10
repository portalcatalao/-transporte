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
            <Phone />
            <p>(64) 9 8434-1355</p>
          </div>
          

          <div>
            <Mail />
            <p>atendimento@transduartego.com.br</p>
          </div>
        </article>
      </div>

      <div className={styles.footerCopyright}>
        <div className={styles.links}>
          <Link href="/guia-rapido/rotas">
            <p>Mapas e Rotas </p>
          </Link>

          <Link href="/transporte-gratuito">
            <p>Direito à gratuidade</p>
          </Link>

          <Link href="/guia-rapido/recarregar-cartao">
            <p>Como recarregar o cartão</p>
          </Link>

          <Link href="/ouvidoria">
            <p>Ouvidoria</p>
          </Link>

          <p>atendimento@transduartego.com.br</p>

          <div>
          <Link href="https://www.facebook.com/people/Transduarte-Fretamento-E-Turismo/100067150343262/">
                <Facebook />
              </Link>

              <Link href="https://www.instagram.com/transduartego/">
                <Instagram />
              </Link>

              <Link href="https://www.linkedin.com/in/grupo-transduarte-catal%C3%A3o-57a157248/?originalSubdomain=br">
                <Linkedin />
              </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>PUBLICADO EM 2022</span>
          <span>Criado por <a href="http://portalcatalao.com.br"><u>Portal Catalão</u></a></span>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
