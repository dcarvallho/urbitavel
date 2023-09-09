import React from "react";
import style from "./style.module.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../slices/counterSlices";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className={style.container}>
      <div>
        Urbitável
        <>
          <button onClick={()=>dispatch(increment())}>Increment</button>
          <>{count}</>
          <button onClick={handleDecrement}>Decrement</button>
        </>
      </div>
      <div>Lixeira</div>
    </div>
  );
};

export default HomeContainer;
