import Link from "next/link";

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
              <input
                type="text"
                placeholder="Qual o cargo pretendido"
                required
              />
            </article>

            <article>
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                required
              />
            </article>

            <article>
              <label htmlFor="">Telefone</label>
              <input type="tel" placeholder="(64) 9XXXX-XXXX" required />
            </article>

            <article>
              <label htmlFor="">Mensagem</label>
              <input type="text" placeholder="Mensagem" required />
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

          <Link href="/">
            <button>Enviar currículo</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
