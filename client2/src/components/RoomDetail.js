import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import rooms from "./Rooms";
import { useDispatch, useSelector } from "react-redux";
import { listRoomDetails } from "../state/actions/roomActions";

const RoomDetails = () => {
  const params = useParams();
  const id = JSON.stringify(params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRoomDetails(modID));
  }, [dispatch, id]);

  const modID = JSON.stringify(params.id).slice(1, -1);

  const roomDetails = useSelector((state) => state.roomDetails);

  const { loading, error, room } = roomDetails;

  const { data } = room;

  return (
    <div className="gg">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h3>{error}</h3>
      ) : data ? (
        //now destructured in line 33
        <div>
          <img src={data.imageurls[0]} alt="room" className="card__image" />
          <h2>{data.name}</h2>
          <p>{data.maxcount}</p>
          <p>{data.phonenumber}</p>
          <p>{data.type}</p>
          <p>{data.rentperda}</p>
          <p>{data.description}</p>
        </div>
      ) : (
        <h1>error</h1>
      )}

      {/* {loading ? (<h1>Loading<h1/>) : error ? ( <h3>{error}</h3> ) : data ? <h3>{data.name}</h3>}; */}
    </div>
  );
};

export default RoomDetails;
