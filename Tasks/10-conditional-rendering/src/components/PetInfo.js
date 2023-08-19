/* Option 1:
function PetInfo(props) {
  const { animal, age, hasPet } = props;

  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : `I don't have a ${animal}`;

  return <h1>{text}</h1>;
} 
*/

// Option 2:
function PetInfo(props) {
  const { animal, age, hasPet } = props;

  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h3>I don't have a {animal}</h3>
  );
}

export default PetInfo;
