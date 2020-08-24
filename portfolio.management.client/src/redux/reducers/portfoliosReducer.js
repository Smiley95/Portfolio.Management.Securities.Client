import { portfoliosConstants } from "../constants/portfoliosConstants";
import initialState from "./initialState";

export function loadPortfolios(state = initialState.portfolios, action) {
  switch (action.type) {
    case portfoliosConstants.PORTFOLIOS_REQUEST_SUCCESS:
      return {
        state: action.portfolios,
      };
    case portfoliosConstants.PORTFOLIOS_REQUEST:
      return state;
    case portfoliosConstants.PORTFOLIOS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
