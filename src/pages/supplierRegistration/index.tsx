import Link from "next/link";

export default function supplierRegistration() {
  return (
    <section>
      <span className="title">CADASTRO DE FORNECEDORES</span>
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
              <label htmlFor="">Anexo</label>

              <input
                type="file"
                id="myFile"
                name="filename"
                accept="image/jpg, image/png"
                required
              />
            </article>
          </div>

          <Link href="/">
            <button>Enviar</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
