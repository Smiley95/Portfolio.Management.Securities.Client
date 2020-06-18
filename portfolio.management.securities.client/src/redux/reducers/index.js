import { combineReducers } from "redux";
import assets from "./assetReducer";
import history from "./historyReducer";
import userAuth from "./authenticationReducer";
const rootReducer = combineReducers({
  assets,
  history,
  userAuth,
});
export default rootReducer;
