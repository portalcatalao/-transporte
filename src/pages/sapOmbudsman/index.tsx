export default function sapOmbudsman() {
  return (
    <section>
      <span className="title">TRANSPORTE URBANO</span>

      <div className="formContainer">
        <p>Nos envie uma mensagem</p>
        <div className="formContent">
          <div className="formInput">
            <article>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite seu nome completo" />
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

            <article>
              <label htmlFor="">Currículo</label>
            </article>
          </div>

          <button>Enviar mensagem</button>
        </div>
      </div>

      <div className="formContainer">
        <p>Nos envie uma mensagem</p>
        <div className="formContent">
          <div className="formInput">
            <article>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite seu nome completo" />
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
              <label htmlFor="">Número do protoloco SAP</label>
              <input type="text" placeholder="Protoloco SAP" />
            </article>

            <article>
              <label htmlFor="">Assunto</label>
              <input type="text" placeholder="Assunto" />
            </article>

            <article>
              <label htmlFor="">Mensagem</label>
              <input type="text" placeholder="Mensagem" />
            </article>

            <article>
              <label htmlFor="">Currículo</label>
            </article>
          </div>

          <button>Enviar mensagem</button>
        </div>
      </div>
    </section>
  );
}
