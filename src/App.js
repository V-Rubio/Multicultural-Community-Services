import "./App.css";
import React from "react";
import Navbar from "./pages/navbar.js";
import Footer from './pages/footer.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/navbar.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Donations from "./pages/donations.js";
import Families from "./pages/families.js";
// import Home from "./pages/Home.js";
import PD from "./pages/professional-development.js";
import Youth from "./pages/youth.js";
// import Contact from "./pages/componentsontact";

function App() {
  return (
    <>
      <head>
        <title>MCS</title>
      </head>
      <Router>
        {/* Could Put navbar code in here to make it show up, but it doesnt apply when the router routes */}

        <Navbar sticky="top" />

        <Routes>
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/families" element={<Families />} />
          <Route path="/professional-development" element={<PD />} />
          <Route path="/youth" element={<Youth />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
