import styles from "./styles.module.scss";

import Place from "../../components/Place";
import Image from "next/image";

export default function charterAndTourism() {
  return (
    <div>
      <section>
        <span className="title">FRETAMENTO E TURISMO</span>
        <p>Atuamos em todo o Brasil. Faça seu orçamento com nossa empresa.</p>
        <p>Temos:</p>

        <div className={styles.transport}>
          <article>
            <Image src="/bus.png" alt="" />
            <p>Ônibus</p>
          </article>

          <article>
            <Image src="/minibus.png" alt="" />
            <p>Micro-ônibus</p>
          </article>

          <article>
            <Image src="/taxi.png" alt="" />
            <p>Táxi</p>
          </article>
        </div>

        <div className="formContainer">
          <p>Faça um orçamento</p>
          <div className="formContent">
            <div className="formInput">
              <article>
                <label htmlFor="">Origem</label>
                <input type="text" placeholder="Informe o local de origem" />
              </article>

              <article>
                <label htmlFor="">Destino</label>
                <input type="text" placeholder="Informe o local de destino" />
              </article>

              <article>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </article>

              <article>
                <label htmlFor="">Telefone</label>
                <input type="text" placeholder="(64) 9XXXX-XXXX" />
              </article>

              <article>
                <label htmlFor="">Assunto</label>
                <input type="text" placeholder="Assunto" />
              </article>

              <article>
                <label htmlFor="">Mensagem</label>
                <input type="text" placeholder="Mensagem" />
              </article>
            </div>

            <button>Solicitar orçamento</button>
          </div>
        </div>
      </section>
      <Place />
    </div>
  );
}
