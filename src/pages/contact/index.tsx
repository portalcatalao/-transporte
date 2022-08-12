import styles from "../contact/styles.module.scss";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "react-feather";

import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <span className="title">CONTATO</span>
      <p className="subtitle">
        Qual a melhor forma para atendê-lo com eficiência?
      </p>

      <div className={styles.contactContainer}>
        <p>Presencial</p>
        <div className={styles.contactContent}>
          <img src="/place.png" alt="" />
          <div className={styles.card}>
            <div className={styles.contact}>
              <span>Escritório/Garagem</span>
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
            </div>
            <div className={styles.socialMedia}>
              <p>Redes sociais</p>
              <div>
                <Link href="/">
                  <article>
                    <Facebook />
                    <p>Facebook</p>
                  </article>
                </Link>

                <Link href="/">
                  <article>
                    <Instagram />
                    <p>Instagram</p>
                  </article>
                </Link>

                <Link href="/">
                  <article>
                    <Linkedin />
                    <p>Linkedin</p>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
