

export default function WorkWithUs() {
  return (
    <section>
      <span className="title">TRABALHE CONOSCO</span>

      <form action="/api/trabalhe-conosco" method="POST" className="formContainer" encType="multipart/form-data">
        <p>Preencha com seus dados</p>
        <div className="formContent">
          <div className="formInput">
            <article>
              <label htmlFor="">Área de interesse</label>
              <input
                name="interestArea"
                type="text"
                placeholder="Qual o cargo pretendido"
                required
              />
            </article>

            <article>
              <label htmlFor="">Nome</label>
              <input
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                required
              />
            </article>

            <article>
              <label htmlFor="">Telefone</label>
              <input
                name="phone"
                type="tel"
                placeholder="(64) 9XXXX-XXXX"
                required
              />
            </article>

            <article>
              <label htmlFor="">Mensagem</label>
              <input
                name="message"
                type="text"
                placeholder="Mensagem"
                required
              />
            </article>

            <article>
              <label htmlFor="">Currículo</label>

              <input
                type="file"
                id="myFile"
                name="filename"
                accept="application/pdf"
                required
              />
            </article>
          </div>
          <button type='submit'>Enviar currículo</button>
        </div>
      </form>
    </section>
  );
}
