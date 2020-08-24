import { fmpConstants } from "../constants/fmpConstants";
import initialState from "./initialState";

export function getGainers(state = initialState.gainers, action) {
  switch (action.type) {
    case fmpConstants.GAINERS_REQUEST_SUCCESS:
      return {
        state: action.gainers,
      };
    case fmpConstants.GAINERS_REQUEST_FAILURE:
      return state;
    default:
      return state;
  }
}
