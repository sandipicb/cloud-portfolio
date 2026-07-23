import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import About from "./components/About";

function App(){
    return (
        <>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        </>
    );
}

export default App;