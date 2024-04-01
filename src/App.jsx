import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'; 
import Vehicle from './pages/Vehicle'; 
import Vehicles from './pages/Vehicles';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './assets/css/layout.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Nav />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
