import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./components/Homescreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelPage from "./components/Hotelpage";

import "./css/App.scss";
import Hotels from "./components/Hotels";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
