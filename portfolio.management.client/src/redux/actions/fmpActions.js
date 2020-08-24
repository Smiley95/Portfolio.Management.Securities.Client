import { fmpService } from "../services/fmpService";
import { fmpConstants } from "../constants/fmpConstants";

function gainers_request_success(gainers) {
  return { type: fmpConstants.GAINERS_REQUEST_SUCCESS, gainers };
}
function gainers_request_failure(error) {
  return { type: fmpConstants.GAINERS_REQUEST_FAILURE, error };
}

function getGainers() {
  return function (dispatch) {
    return fmpService
      .gainers()
      .then((gainers) => {
        dispatch(gainers_request_success(gainers));
      })
      .catch((error) => {
        dispatch(gainers_request_failure(error));
      });
  };
}

export const fmpActions = {
  getGainers,
};
