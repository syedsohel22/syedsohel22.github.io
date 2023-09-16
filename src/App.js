import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import TestNavbar from "./Components/TestNavbar";
import Github from "./Components/Github";
import Navbar from "./Components/Navbar";
import Test2 from "./Components/Test2";
function App() {
  return (
    <div className="App">
      <TestNavbar />

      {/* <Navbar /> */}
      {/* <Test2 /> */}
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
