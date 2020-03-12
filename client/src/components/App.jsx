import React from 'react';
import { Twemoji } from 'react-emoji-render';
 


const App = (props) => {
  const base = props.array;
  let mapped = base.map((item, index) => <div className="item" key={index}>{item}</div>);
  return (
    <div className="container">
      Hello from React!
      <Twemoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" />
      <Twemoji svg text="This ❤️ sentence includes :+1: a variety of emoji types :)" />

      {mapped}
    </div>
  )
};

export default App;