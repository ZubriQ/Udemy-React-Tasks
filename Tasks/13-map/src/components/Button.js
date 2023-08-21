function Button({ setCount, name }) {
  return <button onClick={setCount}>{name}</button>;
}

export default Button;
