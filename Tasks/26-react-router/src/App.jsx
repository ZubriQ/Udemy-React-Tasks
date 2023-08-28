import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
