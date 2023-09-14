import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import TestNavbar from "./Components/TestNavbar";
import Github from "./Components/Github";

function App() {
  return (
    <div className="App">
      <TestNavbar />
      <Home />
      <About />
      <Github />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
