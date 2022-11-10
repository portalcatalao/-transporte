import styles from "./styles.module.scss";

export default function Useful() {
  return (
    <section className={styles.usefulContainer}>
      <div className={styles.usefulHeader}>
        <span>Informações úteis</span>
        <h1>
          Serviço exclusivo para: dúvidas e informações sobre como recarregar
          cartão, tarifa, horários e linhas, reclamação, sugestão e elogios.
        </h1>
        <p>Importante: exija o número do protocolo</p>
      </div>

      <div className={styles.usefulContent}>
        <article>
          <span>Achados e Perdidos</span>
          <p>
            Mantemos por um período de 30 dias documentos e objetos encontrados
            dentro dos nossos veículos e/ou no terminal de integração. Após esse
            período, descartamos o material.
          </p>
          <p>
            Quanto aos bens não reclamados, esses serão doados ou descartados.
          </p>
          <p>
            Exigir do atendente que seja registrado seu pedido de verificação.
            Na retirada, assinar documento referente aos documentos ou objetos.
          </p>
        </article>

        <article>
          <span>Acidentes</span>
          <p>
            Ao reportar acidentes envolvendo nossos veículos, por favor, enviar
            e-mail para atendimento@transduartego.com.br. No Assunto do e-mail,
            escrever: Acidente!
          </p>
          <p>
            No corpo do e-mail, se possível enviar placa, horário, fotos e local
            do ocorrido do acidente.
          </p>
          <p>
            Obrigatoriamente, conter no e-mail: nome, placa e modelo do veículo
            do outro envolvido no acidente.
          </p>
          <p>Evite enviar dados desnecessários para nossa apuração do caso.</p>
        </article>

        <article>
          <span>Trabalhe conosco</span>
          <p>
            Não use esse espaço para enviar currículo ou consultar sobre
            contratação de nossa empresa. O material será descartado
            automaticamente.
          </p>
          <p>
            Use a sessão <strong>Empresa {">"} Trabalhe Conosco</strong>.
          </p>
          <p>
            Os anúncios de recrutamento de pessoal serão publicados em nossas
            redes sociais: facebook.com/grupotransduarte e
            instragram/grupotransduarte.
          </p>
        </article>

        <article>
          <span>Fornecedores</span>
          <p>
            Não use esse espaço para oferecer serviço ou peças à nossa empresa.
            O material será descartado automaticamente.
          </p>
          <p>
            Use a sessão <strong>Empresa/Cadastro de fornecedores</strong>.
          </p>
          <p>
            Utilize a sessão <strong>Empresa/Cadastro de fornecedores</strong>.
          </p>
        </article>
      </div>
    </section>
  );
}
