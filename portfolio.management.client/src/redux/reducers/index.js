import { combineReducers } from "redux";
import { users } from "./UserReducer";
import { getGainers } from "./gainersReducer";
import { authentication } from "./authenticationReducer";
import { loadPortfolios } from "./portfoliosReducer";
const rootReducer = combineReducers({
  users,
  authentication,
  getGainers,
  loadPortfolios,
});
export default rootReducer;
