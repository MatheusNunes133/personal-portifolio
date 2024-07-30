import React, { useState } from "react";
import { Link as ReactScrol } from "react-scroll";
import Link from "next/link";
import style from "./index.module.scss";
import { useMediaQuery, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const matches = useMediaQuery("(max-width:1100px)");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {!matches ? (
        <nav className={style.navbar}>
          <h1>
            Matheus <span>N.</span>
          </h1>

          <ol>
            <ReactScrol
              to="home"
              spy={true}
              smooth={true}
              duration={600}
              className={style.headerLink}
            >
              Home
            </ReactScrol>
            <ReactScrol
              to="aboutMe"
              spy={true}
              smooth={true}
              duration={600}
              className={style.headerLink}
            >
              Sobre Mim
            </ReactScrol>
            <ReactScrol
              to="trajetoria"
              spy={true}
              smooth={true}
              duration={600}
              className={style.headerLink}
            >
              Trajetória
            </ReactScrol>
            <ReactScrol
              to="myWorks"
              spy={true}
              smooth={true}
              duration={600}
              className={style.headerLink}
            >
              Trabalhos
            </ReactScrol>
            <ReactScrol
              to="contato"
              spy={true}
              smooth={true}
              duration={600}
              className={style.headerLink}
            >
              Fale Comigo
            </ReactScrol>
          </ol>

          <Link href="resume.pdf" target="_blank">
            <button className={style.navbarButton}>Currículo</button>
          </Link>
        </nav>
      ) : (
        <nav className={style.navbar}>
          <h1>
            Matheus <span>N.</span>
          </h1>
          <div className={style.menuHamburguer}>
            <IconButton onClick={handleClick} size="large">
              <MenuIcon fontSize="large" className={style.icon} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                padding: 0,
              }}
            >
              <MenuItem>
                <ReactScrol
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={600}
                  onClick={handleClose}
                  className={style.headerLink}
                >
                  Home
                </ReactScrol>
              </MenuItem>

              <MenuItem>
                <ReactScrol
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  duration={600}
                  onClick={handleClose}
                  className={style.headerLink}
                >
                  Sobre Mim
                </ReactScrol>
              </MenuItem>

              <MenuItem>
                <ReactScrol
                  onClick={handleClose}
                  to="trajetoria"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={style.headerLink}
                >
                  Trajetória
                </ReactScrol>
              </MenuItem>

              <MenuItem>
                <ReactScrol
                  onClick={handleClose}
                  to="myWorks"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={style.headerLink}
                >
                  Trabalhos
                </ReactScrol>
              </MenuItem>

              <MenuItem>
                <ReactScrol
                  onClick={handleClose}
                  to="contato"
                  spy={true}
                  smooth={true}
                  duration={600}
                  className={style.headerLink}
                >
                  Fale Comigo
                </ReactScrol>
              </MenuItem>
              <MenuItem>
                <Link href="resume.pdf" target="_blank" onClick={handleClose}>
                  Currículo
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </nav>
      )}
    </>
  );
}
