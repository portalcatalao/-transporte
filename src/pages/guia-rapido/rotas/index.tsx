import Image from "next/image";
import styles from "../../../components/Guide/styles.module.scss";

export default function guideFour() {
  return (
    <section>
      <span className="title">GUIA RÁPIDO</span>
      <p className="subtitle">Mapa das rotas</p>

      <div className={styles.guideContent}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1AtXyxMdmIzGbkCrse0nH_gMK42lnRYs&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1shlfWbRYrNy5wW6n1r6sOeHdFJvWAUM&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1SOCYK_h0DIK6QWbIhdVmLnkDzpklxiw&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1pQkDi9wjLBCX9Ucup7M99flUDfvcHk0&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1QjK4tWtHDRzEz8iJbsgl11fwhYOKBgU&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </div>
    </section>
  );
}
