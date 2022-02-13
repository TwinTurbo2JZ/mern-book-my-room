import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Rooms from "./components/RoomScreen";

import "./css/App.scss";
import RoomScreen from "./components/RoomScreen";
//components
import RoomDetails from "./components/RoomDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RoomScreen />} />
          <Route path="/room/:id" element={<RoomDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
