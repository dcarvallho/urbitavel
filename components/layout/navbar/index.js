import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

import Link from "next/link";
import Image from "next/image";
import Button from "../button";

const Navbar = ({ home, about, behind, talkUs, privacity }) => {
  const title = "URBITÁVEL";

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navLeft}>
          <h1 className={style.title}>{title}</h1>
          <Image src={"/images/icon.svg"} width="32" height="32" alt="Mundo" />
          <ul>
            <li>
              <Link href="">{home}</Link>
            </li>
            <li>
              <Link href="">{about}</Link>
            </li>
            <li>
              <Link href="">{behind}</Link>
            </li>
          </ul>
        </div>
        <div className={style.navRight}>
          <ul>
            <li>
              <Link href="">{talkUs}</Link>
            </li>
            <li>
              <Link href="">{privacity}</Link>
            </li>
          </ul>
          <Button />
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  home: PropTypes.string,
  about: PropTypes.string,
  behind: PropTypes.string,
  talkUs: PropTypes.string,
  privacity: PropTypes.string,
};

Navbar.defaultProps = {
  home: "Página inicial",
  about: "Sobre nós",
  behind: "Por trás da causa",
  talkUs: "Fale conosco",
  privacity: "Privacidade",
};

export default Navbar;
