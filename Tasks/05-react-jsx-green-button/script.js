/**
 * App functional component
 * @returns App functional component
 */
const App = ({ initialButtonText }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [buttonClassName, setButtonClassName] = React.useState('');

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setButtonClassName('green-btn');
  };

  return (
    <div className="app">
      <button className={buttonClassName} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" />);
