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
    <div className=" room">
      <div className="room__imagediv">
        <img src={imageurls[0]} alt="room" className="room__image" />
      </div>
      <div className="room__datadiv">
        <h2 className="room__name">{name}</h2>

        <p className="room__capacity">room capacity: {maxcount}</p>
        <p className="room__type">{type}</p>
        <h3 className="room__rent">Rs:{rentperday}</h3>
      </div>
    </div>
  );
};

export default Hotels;
