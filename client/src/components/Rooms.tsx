import axios from "axios";
import React, { useEffect, useState } from "react";
import Room from "./Room";

const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const url: string = "http://localhost:5000/api";

  useEffect(() => {
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
    fetchRooms();
  }, []);

  enum roomType {
    "Delux",
    "Non-delux",
  }

  type room = {
    _id: any;
    name: string;
    description: string;
    imageurls: [string];
    maxcount: number;
    phonenumber: number;
    type: roomType;
    rentperday: number;
  };

  return (
    <div>
      {/* <h1>home</h1> */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        rooms.map((room: room) => <Room key={room._id} {...room} />)
      )}
    </div>
  );
};

export default Homescreen;
