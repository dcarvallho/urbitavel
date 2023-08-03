import Image from "next/image";
import React from "react";

import style from './style.module.css'

const Banner = () => {
  return (
    <div className={style.banner}> 
      <img src="/images/forest.svg"/>
    </div>
  );
};

export default Banner;
