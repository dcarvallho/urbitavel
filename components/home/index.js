import Image from "next/image";
import React from "react";
import style from "./style.module.css";

const HomeContainer = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.urbitaveleft}>
          <header className={style.header}>URBITÁVEL</header>
          <main className={style.contentMain}>
            <p>
              O projeto Urbitável é uma iniciativa coletiva de estudantes da FIAP,
              Que busca apresentar uma solução sustentável, relativa a um dos{" "}
              <br></br>
              problemas ambientais mais ocorridos pelo <br></br>mundo todo:{" "}
              <br></br>
              <br></br> O inadequado descarte dos lixos e substratos prejudiciais
              ao ambiente em meios urbanos.<br></br>
              <br></br> Se trata, portanto, de uma ideia interventiva que tem como
              objetivo recompensar a população urbana por descartar corretamente
              os seus<br></br> lixos, através do programa consciente de descarte.
            </p>
          </main>
        </div>
        <div>
          <Image src={"/images/lixeira2.jpg"} width="600" height="397" alt='lixeira' className={style.trashRight}/>
        </div>
      </div>
      <section className={style.wrapper}>
        <h1>Testando</h1>
      </section>
    </div>
  );
};

export default HomeContainer;
