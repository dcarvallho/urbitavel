import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.css";

const Navbar = ({ home, about, behind, talkUs, privacity }) => {
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navLeft}>
          <h1>Urbitável</h1>
          <ul>
            <li>{home}</li>
            <li>{about}</li>
            <li>{behind}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>{talkUs}</li>
            <li>{privacity}</li>
          </ul>
          <button>Apoie</button>
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
