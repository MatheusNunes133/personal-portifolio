"use client";

import CardItem from "@/components/cardItem";
import Header from "@/components/header/";
import style from "./page.module.scss";
import Image from "next/image";
import teste from "../../public/assets/pessoa.png";
import citacao from "../../public/assets/citacao-esquerda.png";
import Link from "next/link";
import CustomizedTimeline from "@/components/customizedTimeline";

export default function App() {
  return (
    <>
      <Header />
      <section className={style.secondSectionContainer}>
        <section className={style.secondSection}>
          <div className={style.cardItensContainer}>
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
          </div>
        </section>

        <div className={style.wantToContainer}>
          <div className={style.wantTo}>
            <div className={style.firstCircle}>
              <div className={style.wantToArrow}>
                <Image
                  src="/assets/arrow-down.png"
                  alt="Seta para baixo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h2>Vamos trabalhar juntos e criar produtos incríveis?</h2>
            <button>Converse Comigo</button>
          </div>
        </div>
      </section>
      <section className={style.aboutMe} id="aboutMe">
        <h3>Quem sou eu?</h3>
        <div className={style.containerInfo}>
          <article>
            <div className={style.aboutMeText}>
              <Image
                src={citacao}
                alt="Citação"
                width={70}
                style={{ height: 70 }}
              />
              <div>
                <p>
                  Olá, meu nome é <span>Matheus Nunes Miguel</span> e sou
                  formado no curso superior de Análise e Desenvolvimento de
                  Sistemas pelo Instituto Federal da Paraíba (IFPB). Minha
                  paixão por tecnologia e inovação me levou a seguir essa
                  carreira, e ao longo dos anos desenvolvi um profundo interesse
                  pelo desenvolvimento de sistemas.
                </p>
                <p>
                  Sou uma pessoa aberta a novas ideias e sugestões, e valorizo
                  muito o feedback construtivo. Acredito que sempre há espaço
                  para aprender e melhorar, e estou constantemente buscando
                  maneiras de <span>aperfeiçoar</span> minhas habilidades e
                  conhecimentos.
                </p>
                <Link href="profile.pdf" target="_blank">
                  <button className={style.button}>Ver detalhes</button>
                </Link>
              </div>
            </div>
          </article>
          <Image
            src={teste}
            alt="Teste de Perfil"
            className={style.aboutMeImage}
          />
        </div>
      </section>
      <section className={style.timeLineSection} id="trajetoria">
        <h3 className={style.titleLineSection}>
          Conheça um pouco da <span>minha trajetória</span>!
        </h3>
        <div className={style.timeLineContainer}>
          <CustomizedTimeline />
        </div>
      </section>
    </>
  );
}
