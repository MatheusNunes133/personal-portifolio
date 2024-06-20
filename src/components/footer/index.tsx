"use client";

import Divider from "@mui/material/Divider";
import style from "./index.module.scss";
import { Link as ReactScrol } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import CopyToClipboard from "../copyToClipboard";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <Divider orientation="horizontal" className={style.divider} />
      <div className={style.menuContainer}>
        <div className={style.menuNav}>
          <h4>Menu</h4>
          <ReactScrol
            to="home"
            spy={true}
            smooth={true}
            duration={600}
            className={style.menuLink}
          >
            Home
          </ReactScrol>
          <ReactScrol
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={600}
            className={style.menuLink}
          >
            Sobre Mim
          </ReactScrol>
          <ReactScrol
            to="trajetoria"
            spy={true}
            smooth={true}
            duration={600}
            className={style.menuLink}
          >
            Trajetória
          </ReactScrol>
          <ReactScrol
            to="myWorks"
            spy={true}
            smooth={true}
            duration={600}
            className={style.menuLink}
          >
            Trabalhos
          </ReactScrol>
          <ReactScrol
            to="contato"
            spy={true}
            smooth={true}
            duration={600}
            className={style.menuLink}
          >
            Fale Comigo
          </ReactScrol>
        </div>
        <div className={style.menuNav}>
          <h4>Redes Sociais</h4>
          <Link
            href="https://www.instagram.com/matheuss_nunes_/"
            target="_blank"
            className={style.menuLink}
          >
            <InstagramIcon className={style.icons} />
            <p>Instagram</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/matheusnunesm/"
            target="_blank"
            className={style.menuLink}
          >
            <LinkedInIcon className={style.icons} />
            <p>Linkedin</p>
          </Link>
          <Link
            href="https://github.com/MatheusNunes133"
            target="_blank"
            className={style.menuLink}
          >
            <GitHubIcon className={style.icons} />
            <p>GitHub</p>
          </Link>
        </div>
        <div className={style.menuNav}>
          <h4>Contatos</h4>
          <div className={style.menuNav}>
            <div className={style.menuLink}>
              <CopyToClipboard text="(83)9 9179-2524" />
            </div>
            <div className={style.menuLink}>
              <CopyToClipboard text="matheusnunesmiguel6@gmail.com" email />
            </div>
          </div>
        </div>
      </div>
      <h3>Copyright © 2024 Matheus Nunes</h3>
    </footer>
  );
}
