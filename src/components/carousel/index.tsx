import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import cmax from "../../../public/assets/cmax.png";
import tridev from "../../../public/assets/tridev.png";
import helperSaude from "../../../public/assets/helper-saude.png";
import noNullying from "../../../public/assets/nobullying.png";
import lojaoVip from "../../../public/assets/lojaoVip.png";

import reactIcon from "../../../public/assets/react.svg";
import nestJsIcon from "../../../public/assets/nestjs.svg";
import nextJsIcon from "../../../public/assets/next-js.svg";
import muiIcon from "../../../public/assets/material-ui.svg";
import postgresIcon from "../../../public/assets/postgresql.svg";
import prismaIcon from "../../../public/assets/prisma.svg";
import sassIcon from "../../../public/assets/sass.svg";
import cssIcon from "../../../public/assets/css.svg";
import dockerIcon from "../../../public/assets/docker.svg";
import typescriptIcon from "../../../public/assets/typescript.svg";
import springIcon from "../../../public/assets/spring-boot.svg";
import javaIcon from "../../../public/assets/java.svg";
import junitIcon from "../../../public/assets/junit.svg";
import mavenIcon from "../../../public/assets/maven.svg";
import electronIcon from "../../../public/assets/electron.svg";

import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import { useMediaQuery } from "@mui/material";

import style from "./index.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

export default function CarouselWork() {
  const matches = useMediaQuery("(max-width:1100px)");

  return (
    <>
      {!matches ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          draggable
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className={style.swiper}
        >
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://cmaxconnect.conceitomaximoenade.com.br/"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={cmax}
                alt="Plataforma Cmax"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Plataforma Cmax</h3>
                <p>
                  Plataforma desenvolvida para auxílio na melhora da nota do
                  ENADE de cursos superiores através de elaboração e revisão de
                  simulados.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={typescriptIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nestJsIcon}
                    alt="Ícone do NestJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nextJsIcon}
                    alt="Ícone do NextJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={muiIcon}
                    alt="Ícone do Material UI"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={prismaIcon}
                    alt="Ícone do Prisma ORM"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={sassIcon}
                    alt="Ícone do Sass"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={dockerIcon}
                    alt="Ícone do Docker"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://tridev.com.br/"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={tridev}
                alt="Site da Tridev Soluções"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Tridev Soluções</h3>
                <p>
                  Landing Page da marca Tridev Soluções. A Tridev presta
                  serviços de desenvolvimento de sistemas e consultoria para
                  clientes reais.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={typescriptIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nextJsIcon}
                    alt="Ícone do NextJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={sassIcon}
                    alt="Ícone do Sass"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.cardItem}>
              <Image
                src={helperSaude}
                alt="Site do Helper Saúde"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Helper Saúde</h3>
                <p>
                  Landing Page da empresa Helper Saúde. A empresa focada na
                  prestação de serviços na área da saúde.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={cssIcon}
                    alt="Ícone do CSS"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://repositorio.ifpb.edu.br/jspui/handle/177683/3623"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={noNullying}
                alt="NoBullying API"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>NoBullying API</h3>
                <p>
                  API Rest voltada para a prevenção de denúncias de
                  bullying e assédio no Instituto Federal de Educação, Ciência e
                  Tecnologia da Paraíba.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={springIcon}
                    alt="Ícone do Spring Boot"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={javaIcon}
                    alt="Ícone do Java"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={junitIcon}
                    alt="Ícone do JUnit"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={mavenIcon}
                    alt="Ícone do Apache Maven"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.cardItem}>
              <Image
                src={lojaoVip}
                alt="Logo do Lojão Vip"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Lojão Vip</h3>
                <p>
                Aplicação desktop intuitiva, projetada para o
                  gerenciamento de clientes e vendas,
                  facilitando os cadastros de clientes e
                  controle de estoque.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={springIcon}
                    alt="Ícone do Spring Boot"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={javaIcon}
                    alt="Ícone do Java"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={mavenIcon}
                    alt="Ícone do Apache Maven"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={cssIcon}
                    alt="Ícone do CSS"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={electronIcon}
                    alt="Ícone do Electron"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className={style.swiper}
        >
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://cmaxconnect.conceitomaximoenade.com.br/"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={cmax}
                alt="Plataforma Cmax"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Plataforma Cmax</h3>
                <p>
                  Plataforma desenvolvida para auxílio na melhora da nota do
                  ENADE de cursos superiores através de elaboração e revisão de
                  simulados.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={typescriptIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nestJsIcon}
                    alt="Ícone do NestJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nextJsIcon}
                    alt="Ícone do NextJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={muiIcon}
                    alt="Ícone do Material UI"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={prismaIcon}
                    alt="Ícone do Prisma ORM"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={sassIcon}
                    alt="Ícone do Sass"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={dockerIcon}
                    alt="Ícone do Docker"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://tridev.com.br/"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={tridev}
                alt="Site da Tridev Soluções"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Tridev Soluções</h3>
                <p>
                  Landing Page da marca Tridev Soluções. A Tridev presta
                  serviços de desenvolvimento de sistemas e consultoria para
                  clientes reais.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={typescriptIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={nextJsIcon}
                    alt="Ícone do NextJs"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={sassIcon}
                    alt="Ícone do Sass"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.cardItem}>
              <Image
                src={helperSaude}
                alt="Site do Helper Saúde"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Helper Saúde</h3>
                <p>
                  Landing Page da empresa Helper Saúde. A empresa focada na
                  prestação de serviços na área da saúde.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={cssIcon}
                    alt="Ícone do CSS"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Link
              href="https://repositorio.ifpb.edu.br/jspui/handle/177683/3623"
              target="_blank"
              className={style.cardItem}
            >
              <Image
                src={noNullying}
                alt="NoBullying API"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>NoBullying API</h3>
                <p>
                API Rest voltada para a prevenção de denúncias de
                  bullying e assédio no Instituto Federal de Educação, Ciência e
                  Tecnologia da Paraíba.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={springIcon}
                    alt="Ícone do Spring Boot"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={javaIcon}
                    alt="Ícone do Java"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={junitIcon}
                    alt="Ícone do JUnit"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={mavenIcon}
                    alt="Ícone do Apache Maven"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <div className={style.cardItem}>
              <Image
                src={lojaoVip}
                alt="Logo do Lojão Vip"
                className={style.cardItemImage}
              />
              <div className={style.textOverlay}>
                <h3>Lojão Vip</h3>
                <p>
                Aplicação desktop intuitiva, projetada para o
                  gerenciamento de clientes e vendas,
                  facilitando os cadastros de clientes e
                  controle de estoque.
                </p>
                <div className={style.tecnologias}>
                  <Image
                    src={springIcon}
                    alt="Ícone do Spring Boot"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={postgresIcon}
                    alt="Ícone do PostgreSQL"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={javaIcon}
                    alt="Ícone do Java"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={mavenIcon}
                    alt="Ícone do Apache Maven"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={reactIcon}
                    alt="Ícone do React"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={cssIcon}
                    alt="Ícone do CSS"
                    width={30}
                    height={30}
                  />
                  <Image
                    src={electronIcon}
                    alt="Ícone do Electron"
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}
