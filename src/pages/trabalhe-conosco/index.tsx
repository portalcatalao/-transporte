import Router from "next/router";
import styles from "./styles.module.scss";
import global from "../../../styles/global.module.scss";


export default function WorkWithUs() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    Object.keys(event).forEach((key) => {
      formData.append(key, event[key]);
    });

    const response = await fetch("/api/trabalhe-conosco", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
    if (json.success) {
      Router.push("/");
    }
  };

  return ( 
  <>
    <div>
    <ul className={global.breadcrumb}>
      <li><a href="http://transduartego.com.br/">Home</a></li>
      <li>Trabalhe conosco</li>
    </ul>
    </div>
  

  <section className="formsContainer">
    

      <form
        onSubmit={handleSubmit}
        className="formContainer"
        encType="multipart/form-data"
      >
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
          <button type="submit">Enviar currículo</button>
        </div>
      </form>
    </section>
    </>
  );
}
