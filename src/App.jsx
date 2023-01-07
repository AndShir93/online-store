import React from 'react';
import style from './App.module.css';
import bg from './bg.jpg';
import Counter from "./components/Counter/Counter";

const App = () => {

  return (
    <div>
      <img
        width={500}
        src={bg}
        alt="bg"
      />
      <br/>
      App
      <br/>
      <Counter/>
    </div>
  );
};

export default App;
