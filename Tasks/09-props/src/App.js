import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} />
      <PetInfo animal="turtle" age={150} />
    </div>
  );
}

export default App;
