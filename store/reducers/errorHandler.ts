export interface InitialState {
  errorMessage: string;
}

const initialState: InitialState = {
  errorMessage: "",
};

export const [OPEN_ERROR_MESSAGE, CLOSE_ERROR_MESSAGE] = [
  "OPEN_ERROR_MESSAGE",
  "CLOSE_ERROR_MESSAGE",
];

const errorHandlerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload || `there's something wrong :(`,
      };
    case CLOSE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default errorHandlerReducer;
