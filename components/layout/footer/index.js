import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <img src="/images/footer.svg" className={style.image} />
      <div className={style.testColorFooter}></div>
    </div>
  );
};

export default Footer;
