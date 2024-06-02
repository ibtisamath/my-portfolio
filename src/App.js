import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import { ToastContainer } from "react-toastify";

config.autoAddCss = false;




function App() {
  return (
    <div className="overflow-x-hidden bg-off-white font-poppins text-gray-global">
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
        <ToastContainer position="bottom-right" autoClose={3000} />

    </div>    
  );
}

export default App;
