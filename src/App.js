import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <ProjectShowcase />
      </main>
    </div>
  );
}

export default App;