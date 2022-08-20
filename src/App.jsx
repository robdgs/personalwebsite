import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
    </div>
  );
}

export default App;
