import logo from "./logo.svg";
// import "./App.css";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import Hero from "./components/hero/hero";
import Parallax from "./components/parallax/Parallax";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />
      <NavBar />
      <section id="home">
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
    </>
  );
}

export default App;
