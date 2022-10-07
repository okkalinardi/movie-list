import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  ROBOT_LIST_FETCH,
  ROBOT_LIST_FETCH_SUCCESS,
  ROBOT_LIST_FETCH_ERROR,
  ROBOT_LIST_DOWNLOAD,
  ROBOT_LIST_DOWNLOAD_SUCCESS,
  ROBOT_LIST_DOWNLOAD_ERROR,
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
      payload: "error message",
    });
  }
};
