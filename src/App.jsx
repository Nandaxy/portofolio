import "./index.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skillset from "./components/Skillset.jsx";
import Project from "./components/Project.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skillset />
      <Project />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
