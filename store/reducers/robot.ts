export interface Robot {
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
}

const initialState: InitialState = {
  list: [],
  loading: false,
  error: null,
};

export const [
  ROBOT_LIST_FETCH,
  ROBOT_LIST_FETCH_SUCCESS,
  ROBOT_LIST_FETCH_ERROR,
] = ["ROBOT_LIST_FETCH", "ROBOT_LIST_FETCH_SUCCESS", "ROBOT_LIST_FETCH_ERROR"];

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
