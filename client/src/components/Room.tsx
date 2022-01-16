import { FC } from "react";
//fix rooms any

enum roomType {
  "Delux",
  "Non-delux",
}

interface RoomsProps {
  name: string;
  description: string;
  imageurls: [string];
  maxcount: number;
  phonenumber: number;
  type: roomType;
  rentperday: number;
}
// { rooms }:

const Hotels: FC<RoomsProps> = ({
  name,
  description,
  imageurls,
  maxcount,
  phonenumber,
  type,
  rentperday,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageurls[0]} alt="room" />
      <p>room capacity: {maxcount}</p>
      <p>{type}</p>
      <h3>{rentperday}</h3>
    </div>
  );
};

export default Hotels;
