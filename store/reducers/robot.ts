export interface Robot {
  id: string;
  username: string;
  email: string;
  image: string;
  gender: string;
  macAddress: string;
}

export interface InitialState {
  list: Robot[];
  loading: boolean;
  error: string | null;
  data: Robot | null;
}

const initialState: InitialState = {
  list: [],
  loading: false,
  error: null,
  data: null,
};

export const [
  ROBOT_LIST_FETCH,
  ROBOT_LIST_FETCH_SUCCESS,
  ROBOT_LIST_FETCH_ERROR,
] = ["ROBOT_LIST_FETCH", "ROBOT_LIST_FETCH_SUCCESS", "ROBOT_LIST_FETCH_ERROR"];

export const [
  ROBOT_DETAIL_FETCH,
  ROBOT_DETAIL_FETCH_SUCCESS,
  ROBOT_DETAIL_FETCH_ERROR,
] = [
  "ROBOT_DETAIL_FETCH",
  "ROBOT_DETAIL_FETCH_SUCCESS",
  "ROBOT_DETAIL_FETCH_ERROR",
];

export const [
  ROBOT_LIST_DOWNLOAD,
  ROBOT_LIST_DOWNLOAD_SUCCESS,
  ROBOT_LIST_DOWNLOAD_ERROR,
] = [
  "ROBOT_LIST_ROBOT_LIST_DOWNLOAD",
  "ROBOT_LIST_ROBOT_LIST_DOWNLOAD_SUCCESS",
  "ROBOT_LIST_ROBOT_LIST_DOWNLOAD_ERROR",
];

const robotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROBOT_LIST_FETCH:
      return {
        ...state,
        loading: true,
      };
    case ROBOT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ROBOT_LIST_FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case ROBOT_DETAIL_FETCH:
      return {
        ...state,
        loading: true,
      };
    case ROBOT_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ROBOT_DETAIL_FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case ROBOT_LIST_DOWNLOAD:
      return {
        ...state,
        loading: true,
      };
    case ROBOT_LIST_DOWNLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ROBOT_LIST_DOWNLOAD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default robotReducer;
