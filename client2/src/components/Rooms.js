import { Link } from "react-router-dom";
//fix rooms any in homwscreen

// { rooms }:

const Rooms = ({
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
      <Link to={`/${_id}`} style={{ textDecoration: "none" }}>
        <div className="card__imagediv">
          <img src={imageurls[0]} alt="room" className="card__image" />
        </div>

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
