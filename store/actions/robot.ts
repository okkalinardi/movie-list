import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  ROBOT_LIST_FETCH,
  ROBOT_LIST_FETCH_SUCCESS,
  ROBOT_LIST_FETCH_ERROR,
  ROBOT_DETAIL_FETCH,
  ROBOT_DETAIL_FETCH_SUCCESS,
  ROBOT_DETAIL_FETCH_ERROR,
  ROBOT_LIST_DOWNLOAD,
  ROBOT_LIST_DOWNLOAD_SUCCESS,
  ROBOT_LIST_DOWNLOAD_ERROR,
} from "../reducers/robot";
import {
  OPEN_ERROR_MESSAGE,
  CLOSE_ERROR_MESSAGE,
} from "../reducers/errorHandler";

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
      payload: error.response.statusText,
    });
    dispatch({
      type: OPEN_ERROR_MESSAGE,
      payload: error.response.statusText,
    });

    setTimeout(() => {
      dispatch({
        type: CLOSE_ERROR_MESSAGE,
      });
    }, 3000);
  }
};

export const fetchRobotDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ROBOT_DETAIL_FETCH,
    });
    const robotData: { data: [] } = await axios.get(
      `${process.env.APP_URL}/api/robots/${id}`
    );
    dispatch({
      type: ROBOT_DETAIL_FETCH_SUCCESS,
      payload: robotData.data,
    });
  } catch (error) {
    dispatch({
      type: ROBOT_DETAIL_FETCH_ERROR,
      payload: error.response.statusText,
    });
    dispatch({
      type: OPEN_ERROR_MESSAGE,
      payload: error.response.statusText,
    });

    setTimeout(() => {
      dispatch({
        type: CLOSE_ERROR_MESSAGE,
      });
    }, 3000);
  }
};

export const downloadRobotList = (list) => async (dispatch) => {
  try {
    dispatch({
      type: ROBOT_LIST_DOWNLOAD,
    });

    const doc = new jsPDF("l", "mm", "a4");

    const head = [["ID", "username", "email", "macAddress", "gender"]];
    const data = [];

    list.forEach((item) => {
      data.push([
        item.id,
        item.username,
        item.email,
        item.macAddress,
        item.gender,
      ]);
    });

    autoTable(doc, {
      head: head,
      body: data,
      didDrawCell: (data) => {},
    });

    doc.save("robot-list.pdf");

    dispatch({
      type: ROBOT_LIST_DOWNLOAD_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ROBOT_LIST_DOWNLOAD_ERROR,
      payload: error.response.statusText,
    });
    dispatch({
      type: OPEN_ERROR_MESSAGE,
      payload: error.response.statusText,
    });

    setTimeout(() => {
      dispatch({
        type: CLOSE_ERROR_MESSAGE,
      });
    }, 3000);
  }
};
