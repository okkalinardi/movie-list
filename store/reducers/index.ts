import { combineReducers } from "redux";
import robotReducer from "./robot";
import errorHandlerReducer from "./errorHandler";

export default combineReducers({
  robotState: robotReducer,
  errorState: errorHandlerReducer,
});
