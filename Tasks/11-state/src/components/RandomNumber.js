import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber() {
  const [number, setNumber] = useState(generateRandomNum());
  const generateRandomNumber = () => {
    setNumber(generateRandomNum());
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={generateRandomNumber}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
