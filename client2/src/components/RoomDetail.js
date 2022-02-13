import React from "react";
import rooms from "./Rooms";

const RoomDetails = ({ match }) => {
  //const room = rooms.find((r) => r._id === match.params._id);
  //console.log(room, `2222`);
  console.log(rooms);
  return (
    <div className="gg">
      <h1>Room Details</h1>
    </div>
  );
};

export default RoomDetails;
