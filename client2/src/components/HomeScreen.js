import axios from "axios";
import React, { useEffect, useState } from "react";
import Rooms from "./Rooms";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:5000/api";

  const fetchRooms = async () => {
    try {
      // const response = await fetch(url);
      // const rooms = await response.json();
      const response = await axios.get(url);
      const rooms = await response.data;
      console.log(rooms.data, `1`);
      setRooms(rooms.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="container cards">
      {/* <h1>home</h1> */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        rooms.map((room) => <Rooms key={room._id} {...room} />)
      )}
    </div>
  );
};

export default Homescreen;
