import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
  const [number, setNumber] = useState(generateRandomNum(maxNum));
  const generateRandomNumber = () => {
    setNumber(generateRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={generateRandomNumber}>Generate new random number</button>
    </div>
  );
}

export default RandomNumber;
