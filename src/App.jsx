import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education ";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <p className="text-sm text-gray-900 mb-6 font-semibold text-center font-primary">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  );
};

export default App;

