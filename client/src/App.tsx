import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rooms from "./components/HomeScreen";
import RoomPage from "./components/RoomPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelPage from "./components/Hotelpage";

import "./css/App.scss";
import Homescreen from "./components/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/room/:id" element={<RoomPage />} />
          <Route path="/hotel" element={<HotelPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
