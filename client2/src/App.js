import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Rooms from "./components/RoomScreen";

import "./css/App.scss";
import RoomScreen from "./components/RoomScreen";
//components
import RoomDetails from "./components/RoomDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RoomScreen />}></Route>
          <Route path="/:id" element={<RoomDetails />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
