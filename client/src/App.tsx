import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/Rooms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelPage from "./components/Hotelpage";

import "./css/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Rooms />} />
          <Route path="/hotel" element={<HotelPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
