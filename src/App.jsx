import logo from "./logo.svg";
// import "./App.css";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/Navbar";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/Portfolio";
import Parallax from "./components/parallax/Parallax";
import ParticlesBackground from "./components/ParticlesBackground";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/footer";

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
      {/* <Portfolio /> */}
      <section id="projects">
        <Projects className="projects" />
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default App;
