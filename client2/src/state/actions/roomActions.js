import axios from "axios";

import {
  ROOM_LIST_FAIL,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_REQUEST,
  ROOM_DETAILS_FAIL,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_REQUEST,
} from "../constants/roomConstants";

export const listRooms = () => async (dispatch) => {
  const url = "http://localhost:5000/api";

  try {
    dispatch({ type: ROOM_LIST_REQUEST });

    const { data } = await axios.get(url);

    dispatch({
      type: ROOM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_LIST_FAIL,

      payload: error.message,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
    });
  }
};

export const listRoomDetails = (id) => async (dispatch) => {
  const url = "http://localhost:5000/api";

  try {
    dispatch({ type: ROOM_DETAILS_REQUEST });

    const modID = id;
    const link = `${url}/${modID}`;

    console.log(link, `in room action`);

    const { data } = await axios.get(link);

    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,

      payload: error.message,
      //   payload:
      //     error.response && error.response.data.message
      //       ? error.response.data.message
      //       : error.message,
    });
  }
};
