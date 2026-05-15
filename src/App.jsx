import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for tooltips, modals, etc.
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Programs from "./components/Programs.jsx";
import Facilities from "./components/Facilities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
        <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Contact />
      <Footer />
    </>
  );
}

export default App;