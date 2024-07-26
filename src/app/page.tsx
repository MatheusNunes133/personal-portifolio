"use client";

import CardItem from "@/components/cardItem";
import Header from "@/components/header/";
import style from "./page.module.scss";
import Image from "next/image";
import perfilPhoto from "../../public/assets/perfil.jpeg"
import perfilAboutMe from "../../public/assets/perfilPhoto.png"
import citacao from "../../public/assets/citacao-esquerda.png";
import citacaoRoxo from "../../public/assets/citacao-roxo.png";
import qualidadeIcon from "../../public/assets/qualidade-icon.png";
import proatividadeIcon from "../../public/assets/proatividade.svg";
import teamWorkIcon from "../../public/assets/teamwork.png";
import adaptacaoIcon from "../../public/assets/adaptacao.png";
import Link from "next/link";
import CustomizedTimeline from "@/components/customizedTimeline";
import CarouselWork from "@/components/carousel";
import Footer from "@/components/footer";
import { Link as ReactScroll } from "react-scroll";
import Form from "@/components/form";

export default function App() {
  return (
    <>
      <Header />
      <section className={style.secondSectionContainer}>
        <section className={style.secondSection}>
          <Image 
          src={perfilPhoto}
          alt="Foto de Perfil"
          className={style.perfilImage}
          />
          <div className={style.cardItensContainer}>
            <CardItem
              image={qualidadeIcon}
              description="Ícone que representa qualidade"
              title="Qualidade"
              subTitle="Excêlencia e Atenção aos Detalhes"
              width={70}
              height={70}
            />
            <CardItem
              image={proatividadeIcon}
              description="Ícone de lâmpada que representa ideias"
              title="Proatividade"
              subTitle="Iniciativa e Resolução de Problemas"
              width={70}
              height={70}
            />
            <CardItem
              image={teamWorkIcon}
              description="Imagem que representa trabalho em equipe"
              title="Colaboração"
              subTitle="Trabalho em Equipe e Comunicação"
              width={70}
              height={70}
            />
            <CardItem
              image={adaptacaoIcon}
              description="Imagem que representa adaptação"
              title="Adaptabilidade"
              subTitle="Flexibilidade e Aprendizado Rápido"
              width={70}
              height={70}
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
            <ReactScroll
              to="contato"
              spy={true}
              smooth={true}
              duration={600}
              className={style.button}
            >
              Entre em Contato
            </ReactScroll>
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
                className={style.imageAboutMe}
              />
              <div>
                <p>
                  Olá, meu nome é <span>Matheus Nunes Miguel</span> e sou
                  formado no curso superior de{" "}
                  <span>Análise e Desenvolvimento de Sistemas</span> pelo
                  Instituto Federal de Educação, Ciência e Tecnologia da Paraíba
                  (IFPB). Minha paixão por tecnologia e inovação me levou a
                  seguir essa carreira, e ao longo dos anos desenvolvi um
                  profundo interesse pelo desenvolvimento de sistemas.
                </p>
                <p>
                  Sou uma pessoa aberta a novas ideias e sugestões, e valorizo
                  muito o feedback construtivo. Acredito que sempre há espaço
                  para aprender e melhorar, e estou constantemente buscando
                  maneiras de <span>aperfeiçoar</span> minhas habilidades e
                  conhecimentos.
                </p>
                <Link href="resume.pdf" target="_blank">
                  <button className={style.button}>Ver detalhes</button>
                </Link>
              </div>
            </div>
          </article>
          <Image
            src={perfilAboutMe}
            alt="Foto de Perfil"
            width={500}
            height={500}
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
      <section className={style.myWorks} id="myWorks">
        <h3>
          Alguns dos meus <span>Trabalhos</span>
        </h3>
        <CarouselWork />
      </section>
      <section className={style.citationContainer}>
        <div className={style.citacao}>
          <Image
            src={citacaoRoxo}
            alt="Imagem de aspas de citação"
            width={40}
            className={style.image}
          />
          <h2>
            A única maneira de fazer um excelente trabalho é amar o que você
            faz.
          </h2>
          <div className={style.citacaoAuthor}>
            <h3>Steve Jobs</h3>
            <p>12 de Junho de 2005</p>
          </div>
        </div>
      </section>
      <section className={style.contactMe} id="contato">
        <Form />
      </section>
      <Footer />
    </>
  );
}
