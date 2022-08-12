export default function workWithUs() {
  return (
    <section>
      <span className="title">TRABALHE CONOSCO</span>

      <div className="formContainer">
        <p>Preencha com seus dados</p>
        <div className="formContent">
          <div className="formInput">
            <article>
              <label htmlFor="">Área de interesse</label>
              <input type="text" placeholder="Qual o cargo pretendido" />
            </article>

            <article>
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite seu nome completo" />
            </article>

            <article>
              <label htmlFor="">Telefone</label>
              <input type="text" placeholder="(64) 9XXXX-XXXX" />
            </article>

            <article>
              <label htmlFor="">Mensagem</label>
              <input type="text" placeholder="Mensagem" />
            </article>

            <article>
              <label htmlFor="">Currículo</label>
            </article>
          </div>

          <button>Enviar currículo</button>
        </div>
      </div>
    </section>
  );
}
