import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import MainLayout from './layouts/MainLayout';
import './App.css';
import SingleCourse from './components/SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
