import React from 'react';

const App = () => {
  const [state, setState] = React.useState(0);
  const handleClick = (value) => {

    setState(value + 1);
  };

  return (
    <div>
      App
      <br/>
      {state}
      <br/>
      <button onClick={() => handleClick(state)}>Click</button>
    </div>
  );
};

export default App;
