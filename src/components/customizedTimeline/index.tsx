"use client";

import { motion } from "framer-motion";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function CustomizedTimeline() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100);
    };

    handleResize(); // Definir inicialmente com base na largura da tela
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Timeline horizontal={isSmallScreen ? false : true}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2020</TimelineTime>
            <TimelineTitle>Faculdade</TimelineTitle>
            <TimelineBody>
              Iniciando minha graduação em análise e desenvolvimento de sistemas
              através do Instituto Federal de Educação, Ciência e Tecnologia da
              Paraíba.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2021</TimelineTime>
            <TimelineTitle>Loopis Soluções Tecnológicas</TimelineTitle>
            <TimelineBody>
              Começando minha jornada na área de desenvolvimento de sistemas
              como consultor júnior na empresa de tecnologia, onde
              posteriormente passaria ao cargo de Diretor de Projetos.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2023</TimelineTime>
            <TimelineTitle>Conceito Máximo Enade</TimelineTitle>
            <TimelineBody>
              Tive a oportunidade atuar como desenvolvedor full stack na
              empresa, onde desenvolvi uma plataforma para criar e analisar
              resultados de simulados de uma instituição de nível superior.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
      >
        <TimelineItem>
          <TimelinePoint id="time-line-point" icon={HiCalendar}></TimelinePoint>
          <TimelineContent style={{ marginTop: "1rem" }}>
            <TimelineTime>2024</TimelineTime>
            <TimelineTitle>Até o momento</TimelineTitle>
            <TimelineBody>
              Atuando como freelancer em desenvolvimento full-stack.
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </motion.div>
    </Timeline>
  );
}
