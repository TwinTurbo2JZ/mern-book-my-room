import React from "react";
import Rooms from "./Rooms";

const RoomDetails = ({ match }) => {
  const Room = Rooms.find((r) => r._id === match.params._id);
  return <div>RoomDetails</div>;
};

export default RoomDetails;
