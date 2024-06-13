import Link from "next/link";
import style from "./index.module.scss";

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <h1>
        Matheus <span>N.</span>
      </h1>

      <ol>
        <Link href={"#"} className={style.headerLink}>
          Home
        </Link>
        <Link href="#aboutMe" className={style.headerLink}>
          Sobre Mim
        </Link>
        <Link href={"#"} className={style.headerLink}>
          Trajetória
        </Link>
        <Link href={"#"} className={style.headerLink}>
          Trabalhos
        </Link>
        <Link href={"#"} className={style.headerLink}>
          Fale Comigo
        </Link>
      </ol>

      <Link href="profile.pdf" target="_blank">
        <button>Currículo</button>
      </Link>
    </nav>
  );
}
