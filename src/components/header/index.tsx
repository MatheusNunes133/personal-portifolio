import { useState } from "react";
import style from "./index.module.scss";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import teste from "../../../public/assets/perfilPhoto.png";
import CardItem from "../cardItem";
import Lottie from "lottie-react";
import scroll from "../../../public/assets/scroll.json";

export default function Header() {
  return (
    <header className={style.container} id="home">
      <Navbar />
      <section className={style.contentBox}>
        <div className={style.titleBox}>
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
