import styles from "./styles.module.scss";
import Router from "next/router";
import global from "../../../styles/global.module.scss";
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

    <>
      <div>
        <ul className={global.breadcrumb}>
          <li><a href="http://transduartego.com.br/">Home</a></li>
          <li>Fretamento</li>
        </ul>
      </div>
      <section className={styles.charterContainer}>
        <article>

          <p>Atuamos em todo o Brasil. Faça seu orçamento com nossa empresa.</p>
        </article>

        <div className={styles.charterContent}>
          <div>
            <span>Fretamento</span>

            <article>
              <p>Trabalhamos com fretamento destinado ao transporte de grupo específico de passageiros. Fazemos a roteirização personalizada, de acordo com a demanda do contratante. Há também treinamento específico de nossos profissionais para melhor atendê-lo. </p>
              <p>Para prestar um serviço de excelência a empresas, estudantes ou instituições diversas, dispomos de carros de pequeno porte, vans e micro-ônibus e ônibus.</p>

            </article>
          </div>
        </div>

        <div className={styles.transport}>
          <article>
            <img src="/veiculo-03.jpg" alt="" />
            <h4>Ônibus Convencional</h4>
            <p>Ônibus Convencional, 45 poltronas, ar condicionado, cinto de segurança e iluminação de leitura.</p>
          </article>
          <article>
            <img src="/veiculo-04.jpg" alt="" />
            <h4>Micro-ônibus</h4>
            <p>Micro-ônibus, 31 poltronas, ar condicionado, cinto de segurança e iluminação de leitura.</p>
          </article>

          <article>
            <img src="/veiculo-05.jpg" alt="" />
            <h4>Carro Executivo</h4>
            <p>Spin Branca 2023</p>
          </article>

          <article>
            <img src="/veiculo-06.jpg" alt="" />
            <h4>Carro Executivo</h4>
            <p>Onix Turbo 1.0 Branco Sedan 2022/23</p>
          </article>
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
    </>
  );
}
