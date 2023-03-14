import "./App.css";
import Projects from "./Component/Projects/Projects";
import Nav from "./Component/Nav/Nav";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
