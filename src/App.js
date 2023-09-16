import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Github from "./Components/Github";
import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box className="App" bg="gray.100">
      <Navbar />

      <Home />
      <About />
      <Github />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
