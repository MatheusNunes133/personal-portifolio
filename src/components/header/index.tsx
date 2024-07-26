import { useState } from "react";
import style from "./index.module.scss";
import Navbar from "@/components/navbar";
import Image from "next/image";
import perfilPhoto from "../../../public/assets/perfil.jpeg"
import Lottie from "lottie-react";
import scroll from "../../../public/assets/scroll.json";

export default function Header() {
  return (
    <header className={style.container} id="home">
      <Navbar />
      <section className={style.contentBox}>
        <div className={style.titleBox}>
        <Image 
          src={perfilPhoto}
          alt="Foto de Perfil"
          className={style.perfilImage}
          />
          <h1>
            Olá, eu sou <span>Matheus Nunes</span>, desenvolvedor Full Stack.
            Transformando ideias em soluções digitais inovadoras.
          </h1>

        </div>
        <div className={style.imageBox}>
          <Lottie 
          animationData={scroll}
          loop
          />
        </div>
      </section>
    </header>
  );
}
