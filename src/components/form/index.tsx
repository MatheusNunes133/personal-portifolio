import style from "./index.module.scss";
import { useState } from "react";
import { emailService } from "@/services/axios";
import { toast } from "react-toastify";
import { isEmail } from "validator";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [message, setMessage] = useState("");

  function handlePhone(event: string) {
    return setPhone(
      event
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d+?)$/, "$1")
    );
  }

  async function sendEmail() {
    try {
      const verify = checkData();
      if (verify.success === false && verify.error === false) {
        throw new Error("Informe todos os campos!");
      }

      if (verify.error === true) {
        throw new Error("Por favor, informe um e-mail válido!");
      }

      const data = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PK,
        template_params: {
          name,
          email,
          titleMessage: assunto,
          phone,
          message,
        },
      };
      const sendMessage = emailService.post("/send", data);
      toast.promise(sendMessage, {
        pending: {
          render: () => "Enviando Mensagem!",
          isLoading: true,
        },
        success: {
          render: ({ data }) => "Mensagem enviada com sucesso!",
          isLoading: false,
        },
        error: {
          render: ({ error }: any) =>
            `Erro ao enviar mensagem: ${
              error.response?.data?.message || "Erro desconhecido"
            }`,
          isLoading: false,
        },
      });
      resetCamps();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  function checkData() {
    let ok = true;
    let invalidEmail = false;
    if (!name) {
      ok = false;
    }
    if (!assunto) {
      ok = false;
    }
    if (!isEmail(email)) {
      ok = false;
      invalidEmail = true;
    }
    if (!phone) {
      ok = false;
    }
    if (!message) {
      ok = false;
    }

    return { success: ok, error: invalidEmail };
  }

  function resetCamps() {
    setName("");
    setAssunto("");
    setEmail("");
    setPhone("");
    setMessage("");
  }
  return (
    <form className={style.formContainer}>
      <h1>Entrar em contato</h1>
      <div className={style.formInfoContainer}>
        <div className={style.formInfo}>
          <label htmlFor="name">Seu Nome</label>
          <input
            name="name"
            type="text"
            placeholder="Inform seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <label htmlFor="name">Seu Telefone</label>
          <input
            name="name"
            type="text"
            placeholder="(XX) XXXXX-XXXX"
            value={phone}
            onChange={(event) => {
              handlePhone(event.target.value);
            }}
            required
          />
        </div>
        <div className={style.formInfo}>
          <label htmlFor="name">Seu E-mail</label>
          <input
            name="name"
            type="email"
            placeholder="Informe seu E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="name">Assunto</label>
          <input
            name="name"
            type="text"
            placeholder="Assunto do E-mail"
            value={assunto}
            onChange={(event) => setAssunto(event.target.value)}
            required
          />
        </div>
      </div>

      <label htmlFor="mesage" className={style.messageLabel}>
        Mensagem
      </label>
      <textarea
        name="mesage"
        placeholder="Digite sua mensagem..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      ></textarea>
      <div className={style.buttonContainer}>
        <button onClick={sendEmail} type="button">
          Enviar Mensagem
        </button>
      </div>
    </form>
  );
}
