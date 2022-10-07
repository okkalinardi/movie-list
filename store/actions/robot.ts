import axios from "axios";

import {
  ROBOT_LIST_FETCH,
  ROBOT_LIST_FETCH_SUCCESS,
  ROBOT_LIST_FETCH_ERROR,
} from "../reducers/robot";

export const fetchRobots = () => async (dispatch) => {
  try {
    dispatch({
      type: ROBOT_LIST_FETCH,
    });
    const robotList: { data: [] } = await axios.get(
      `${process.env.APP_URL}/api/robots`
    );
    dispatch({
      type: ROBOT_LIST_FETCH_SUCCESS,
      payload: robotList.data,
    });
  } catch (error) {
    dispatch({
      type: ROBOT_LIST_FETCH_ERROR,
      payload: "error message",
    });
  }
};
