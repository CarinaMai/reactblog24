import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import Europa from "./Europa";
import Asien from "./Asien";
import Amerika from "./Amerika";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/europa" element={<Europa />} />
            <Route path="/asien" element={<Asien />} />
            <Route path="/amerika" element={<Amerika />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
