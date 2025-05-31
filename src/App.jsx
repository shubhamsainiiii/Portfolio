import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education ";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Achievement />
      <Contact />
      <p className="text-sm text-gray-900 mb-6 font-semibold text-center font-primary">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  );
};

export default App;

