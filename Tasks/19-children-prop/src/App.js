import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text insdide of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="purple">
        <h2>Another text</h2>
        <p>Description</p>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
    </div>
  );
}

export default App;
