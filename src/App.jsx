import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
