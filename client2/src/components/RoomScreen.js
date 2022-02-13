//import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rooms from "./Rooms";

import { listRooms } from "../state/actions/roomActions";
const Homescreen = () => {
  // const [rooms, setRooms] = useState([]);
  // const [loading, setLoading] = useState(true);

  //const url = "http://localhost:5000/api";

  // const fetchRooms = async () => {
  //   try {
  //     // const response = await fetch(url);
  //     // const rooms = await response.json();
  //     const response = await axios.get(url);
  //     const rooms = await response.data;
  //     console.log(rooms.data, `1`);
  //     setRooms(rooms.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const dispatch = useDispatch();

  const roomList = useSelector((state) => state.roomList);

  const { loading, rooms, error } = roomList;

  useEffect(() => {
    //fetchRooms();
    dispatch(listRooms());
  }, [dispatch]);

  // const rooms = []; when temp redux loading
  return (
    <div className="container cards">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        //console.log(rooms.data)
        rooms.data.map((room) => <Rooms key={room._id} {...room} />)
      )}
    </div>
  );
};

export default Homescreen;
