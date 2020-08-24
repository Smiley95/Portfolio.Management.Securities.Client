import { portfoliosServices } from "../services/portfoliosService";
import { portfoliosConstants } from "../constants/portfoliosConstants";

function request(authentication) {
  return {
    type: portfoliosConstants.PORTFOLIOS_REQUEST_SUCCESS,
    authentication,
  };
}
function success(portfolios) {
  return { type: portfoliosConstants.PORTFOLIOS_REQUEST_FAILURE, portfolios };
}
function failure(error) {
  return { type: portfoliosConstants.PORTFOLIOS_REQUEST_FAILURE, error };
}

export function loadPortfolios() {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  return (dispatch) => {
    dispatch(request({ user, token }));
    portfoliosServices
      .loadPortfolios(user, token)
      .then((data) => {
        dispatch(success(data));
        return data;
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
}
