import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import Home from './pages/Home'; 
import Vehicle from './pages/Vehicle'; 
import Vehicles from './pages/Vehicles';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import './assets/css/layout.css';
import ScrollToTop from './components/ScrollToTop';

function Main() {
  const location = useLocation(); // Using useLocation inside Main component
  return (
    <>
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vehicle/:location/cars/:vehicleId" element={<Vehicle location={location}/>} />
        <Route path="/vehicles" element={<Vehicles  />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Main /> 
    </Router>
  );
}

export default App;