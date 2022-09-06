import styles from "./styles.module.scss";

import Place from "../../components/Place";

import Router from "next/router";

export default function CharterAndTourism() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    Object.keys(event).forEach((key) => {
      formData.append(key, event[key]);
    });

    const response = await fetch("/api/solicitar-orcamento", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    if (json.success) {
      Router.push("/");
    }
  };

  return (
    <div>
      <section>
        <span className="title">FRETAMENTO E TURISMO</span>
        <p>Atuamos em todo o Brasil. Faça seu orçamento com nossa empresa.</p>
        <p>Temos:</p>

        <div className={styles.transport}>
          <article>
            <img src="/bus.png" alt="" />
            <p>Ônibus</p>
          </article>

          <article>
            <img src="/minibus.png" alt="" />
            <p>Micro-ônibus</p>
          </article>

          <article>
            <img src="/taxi.png" alt="" />
            <p>Táxi</p>
          </article>
        </div>

        <div>
          <p>
            Caso queira o atendimento pelo WhatsApp, ligue (64) 9xxxxxxxx, de
            segunda a sexta-feira, das 8h às 18h.{" "}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="formContainer"
          encType="multipart/form-data"
        >
          <p>Faça um orçamento</p>
          <div className="formContent">
            <div className="formInput">
              <article>
                <label htmlFor="">Origem</label>
                <input
                  name="origin"
                  type="text"
                  placeholder="Informe o local de origem"
                />
              </article>

              <article>
                <label htmlFor="">Destino</label>
                <input
                  name="destiny"
                  type="text"
                  placeholder="Informe o local de destino"
                />
              </article>

              <article>
                <label htmlFor="">E-mail</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </article>

              <article>
                <label htmlFor="">Telefone</label>
                <input name="phone" type="tel" placeholder="(64) 9XXXX-XXXX" />
              </article>

              <article>
                <label htmlFor="">Assunto</label>
                <input name="subject" type="text" placeholder="Assunto" />
              </article>

              <article>
                <label htmlFor="">Mensagem</label>

                <textarea name="message" id="mensagem" placeholder="Mensagem" />
              </article>
            </div>

            <button type="submit">Solicitar orçamento</button>
          </div>
        </form>
      </section>
    </div>
  );
}
