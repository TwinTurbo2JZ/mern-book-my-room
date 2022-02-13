import React from "react";
import Rooms from "./Rooms";

interface RoomProps {
  match: any;
  r: any;
  find: any;
}

const RoomPage: React.FC<RoomProps> = ({ match }) => {
  const Room = Rooms.find((r) => r._id === match.params._id);
  return <div>RoomPage</div>;
};

export default RoomPage;
