import { useState } from "react";
import style from "./index.module.scss";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Header() {
  return (
    <header className={style.container}>
      <Navbar />
      <div className={style.contentBox}>
        <div className={style.titleBox}>
          <h1>
            Olá, eu sou <span>Matheus Nunes</span>, desenvolvedor Full Stack.
            Transformando ideias em soluções digitais inovadoras.
          </h1>
        </div>
      </div>
    </header>
  );
}
