//import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rooms from "./Rooms";

import { listRooms } from "../state/actions/roomActions";
const Homescreen = () => {
  const dispatch = useDispatch();

  const roomList = useSelector((state) => state.roomList);

  const { loading, rooms, error } = roomList;

  const { data } = rooms;
  //console.log(data, `in roomScreen`);

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
      ) : data ? (
        //now destructured in line 33
        data.map((room) => <Rooms key={room._id} {...room} />)
      ) : (
        <h1>error</h1>
      )}
    </div>
  );
};

export default Homescreen;
