import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Contact />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
