import Image from "next/image";
import styles from "./styles.module.scss";
import global from "../../../../styles/global.module.scss";

export default function guideFour() {
  return (
    <>

      <div>
        <ul className={global.breadcrumb}>
          <li><a href="http://transduartego.com.br/">Home</a></li>
          <li><a href="../guia-rapido">Guias e Rotas</a></li>
          <li>Mapa das rotas</li>
        </ul>
      </div>


      <section>


        <div className={styles.guideContent}>

          <div className={styles.card}>
            <img src="../map-1.jpeg" alt="" className={styles.cardimgtop} />
            <div className={styles.cardbody}>
              <p className={styles.cardtext}>Linha 1 - Universitário / Pontal</p>
              <span className={styles.cardtext2}><small className="text-muted"><a href="https://www.google.com/maps/d/viewer?mid=1AtXyxMdmIzGbkCrse0nH_gMK42lnRYs&ll=-18.166205365960472%2C-47.93745105000001&z=15">Ver Rota</a></small></span>
              <span className={styles.cardtext2}><small className="text-muted"><a href="../map-1.pdf"> Baixar PDF</a></small></span>
            </div>
          </div>


          <div className={styles.card}>
            <img src="../map-2.jpeg" alt="" className={styles.cardimgtop} />
            <div className={styles.cardbody}>
              <p className={styles.cardtext}>Linha 2 - Vila Liberdade / Santa Terezinha</p>
              <span className={styles.cardtext2}><small className="text-muted"><a href="https://www.google.com/maps/d/viewer?mid=1shlfWbRYrNy5wW6n1r6sOeHdFJvWAUM">Ver Rota</a></small></span>
              <span className={styles.cardtext2}><small className="text-muted"><a href="../map-2.pdf"> Baixar PDF</a></small></span>
            </div>
          </div>

          <div className={styles.card}>
            <img src="../map-3.jpeg" alt="" className={styles.cardimgtop} />
            <div className={styles.cardbody}>
              <p className={styles.cardtext}>Linha 3 - Castelo Branco</p>
              <span className={styles.cardtext2}><small className="text-muted"><a href="https://www.google.com/maps/d/viewer?mid=1SOCYK_h0DIK6QWbIhdVmLnkDzpklxiw&ll=-18.186601160568085%2C-47.94515245000001&z=14">Ver Rota</a></small></span>
              <span className={styles.cardtext2}><small className="text-muted"><a href="../map-3.pdf"> Baixar PDF</a></small></span>
            </div>
          </div>

          <div className={styles.card}>
            <img src="../map-4.jpeg" alt="" className={styles.cardimgtop} />
            <div className={styles.cardbody}>
              <p className={styles.cardtext}>Linha 4 - Ipanema</p>
              <span className={styles.cardtext2}><small className="text-muted"><a href="https://www.google.com/maps/d/viewer?mid=1pQkDi9wjLBCX9Ucup7M99flUDfvcHk0&ll=-18.15405078564614%2C-47.9331955&z=14">Ver Rota</a></small></span>
              <span className={styles.cardtext2}><small className="text-muted"><a href="../map-4.pdf"> Baixar PDF</a></small></span>
            </div>
          </div>

          <div className={styles.card}>
            <img src="../map-5.jpeg" alt="" className={styles.cardimgtop} />
            <div className={styles.cardbody}>
              <p className={styles.cardtext}>Linha 05 - Vila União / Bairro das Americas</p>
              <span className={styles.cardtext2}><small className="text-muted"><a href="../map-5.pdf">Ver Rota</a></small></span>
              <span className={styles.cardtext2}><small className="text-muted"><a href="https://www.google.com/maps/d/pdf?mid=1QjK4tWtHDRzEz8iJbsgl11fwhYOKBgU&pagew=792&pageh=612&llsw=-18.17142%2C-47.973423&llne=-18.141611%2C-47.927117"> Baixar PDF</a></small></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
