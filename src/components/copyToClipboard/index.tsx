//"use client";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import copy from "clipboard-copy";
import { toast } from "react-toastify";
import style from "./index.module.scss";

interface ICopy {
  text: string;
  email?: boolean;
}

export default function CopyToClipboard({ text, email }: ICopy) {
  async function handleCopy() {
    try {
      if (email) {
        await copy("matheusnunesmiguel6@gmail.com");
        toast.success("Email Copiado!", {
          className: style.customToastContent,
        });
      } else {
        await copy(text);
        toast.success("Telefone Copiado!", {
          className: style.customToastContent,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={handleCopy} className={style.copy}>
      <ContentCopyIcon sx={{ marginRight: ".5rem" }} />
      <p>{email ? "Email" : text}</p>
    </div>
  );
}
