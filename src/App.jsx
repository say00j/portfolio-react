import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Projects />
    </>
  );
}

export default App;
