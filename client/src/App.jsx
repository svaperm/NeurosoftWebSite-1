import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Landing from './components/Landing';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Support from './components/Support';
import Vacancies from './components/Vacancies';
import Header from './components/Header';
import Nav from './components/Header/components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/vacancies" element={<Vacancies />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <div className="logo"></div>
        <nav className="footer-nav">
          <ul>
            <Nav />
          </ul>
        </nav>
        <ul className="social-nav">
          <li>
            <a href="#" className="social-item instagram"></a>
          </li>
          <li>
            <a href="#" className="social-item facebook"></a>
          </li>
          <li>
            <a href="#" className="social-item telegram"></a>
          </li>
          <li>
            <a href="#" className="social-item vk"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
