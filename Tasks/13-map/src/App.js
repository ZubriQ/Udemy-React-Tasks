import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'myButton',
  'buttonTwo',
  'just button',
  'cLiCk It',
  'clicl me again',
  'and again!',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text) => {
        return <Button setCount={incrementCount} name={text} key={text} />;
      })}
    </div>
  );
}

export default App;
