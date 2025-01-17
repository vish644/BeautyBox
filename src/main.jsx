import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";
import Hero from "./Components/Hero.jsx";
import Home from "./Components/Home.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero/>
    <Home/>
    <App />
    <Footer/>
  </React.StrictMode>
);
