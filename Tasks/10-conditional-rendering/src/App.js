import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} hasPet />
      <PetInfo animal="turtle" age={150} hasPet={false} />
    </div>
  );
}

export default App;
