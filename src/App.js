import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false,    // if true, animation runs only once
    });
  }, []);
   return (
    <div className="app-container">
      <Header />
      <div className="content">
      <Home />
      </div>
      {/* Gallery, Blog, Resume components will come here */}
      <Footer />
    </div>
  );
}

export default App;
