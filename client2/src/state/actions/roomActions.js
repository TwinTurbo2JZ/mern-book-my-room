import axios from "axios";

import {
  ROOM_LIST_FAIL,
  ROOM_LIST_SUCCESS,
  ROOM_LIST_REQUEST,
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

      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
