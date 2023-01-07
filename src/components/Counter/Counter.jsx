import React from 'react';
import style from "../../App.module.css";
import bomb from './assets/bomb.svg';

const Counter = () => {
  console.log('style', style);
  const [state, setState] = React.useState(0);
  const handleClick = (value) => {

    setState(value + 1);
  };

  return (
    <>
      {state}
      <br/>
      <button
        className={style.button}
        onClick={() => handleClick(state)}
      >
        лик
      </button>
      <img src={bomb} alt="Bomb"/>
    </>
  );
};

export default Counter;
