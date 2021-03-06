import { FC } from "react";
import { Link } from "react-router-dom";
//fix rooms any in homwscreen

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
  props: any;
  _id: any;
}
// { rooms }:

const Rooms: FC<RoomsProps> = ({
  name,
  description,
  imageurls,
  maxcount,
  phonenumber,
  type,
  rentperday,
  _id,
}) => {
  return (
    <div className=" card">
      <Link to={`/room/${_id}`}>
        <div className="card__imagediv">
          <img src={imageurls[0]} alt="room" className="card__image" />
        </div>
      </Link>
      <Link to={`/room/${_id}`}>
        <div className="card__datadiv">
          <h2 className="card__name">{name}</h2>

          <p className="card__capacity">room capacity: {maxcount}</p>
          <p className="card__type">{type}</p>
          <h3 className="card__rent">Rs:{rentperday}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Rooms;
