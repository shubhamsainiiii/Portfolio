import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden font-primary">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Hero />} />

          {/* Optional: separate pages */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
