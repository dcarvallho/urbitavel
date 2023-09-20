import React from "react";
import style from "./style.module.css";

const MessageHome = () => {
  return (
    <div className={style.wrapperMessage}>
      <header className={style.styleHeader}>
        <h1>Lutamos pela saúde do planeta que habitamos</h1>
        <br></br>
        <h3>Podemos mudar o mundo</h3>
      </header>
      <main className={style.mainContent}>
        <span>
          Se você quer defender o planeta e se somar às pessoas que atuam para
          <br></br>
          proteger o meio ambiente, aqui é o seu lugar!<br></br>
          <br></br> Nós acreditamos que um mundo mais verde, pacífico e justo
          para todas as<br></br> formas de vida é possível, e não poupamos
          esforços para alcançá-lo.<br></br>
          <br></br> Temos décadas de ativismo que muito nos ensinou e que
          <br></br> nos mostra que ainda temos muito o que fazer.
        </span>
      </main>
    </div>
  );
};

export default MessageHome;
