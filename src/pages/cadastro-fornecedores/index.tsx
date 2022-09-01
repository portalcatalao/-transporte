import Router from "next/router";

export default function SupplierRegistration() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    Object.keys(event).forEach(key => {
      formData.append(key, event[key]);
    });

    const response = await fetch("/api/cadastro-fornecedores", {
      method: "POST",
      body: formData,
    })

    const json = await response.json();
    if (json.success) {
      Router.push('/')
    }
  };

  return (
    <section>
      <span className="title">CADASTRO DE FORNECEDORES</span>
      <form onSubmit={handleSubmit} className="formContainer" encType="multipart/form-data">
        <p>Nos envie uma mensagem</p>

        <div className="formContent">
          <div className="formInput">
            <article>
              <label htmlFor="">Nome</label>
              <input name="name" type="text" placeholder="Digite seu nome completo" />
            </article>

            <article>
              <label htmlFor="">E-mail</label>
              <input name="email" type="email" placeholder="Digite seu e-mail" />
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
              <input name="message" type="text" placeholder="Mensagem" />
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

          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
}
