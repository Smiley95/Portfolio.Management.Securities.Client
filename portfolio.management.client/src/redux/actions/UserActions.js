import { userService } from "../services/userService";
import { history } from "../services/helper";
import { userConstants } from "../constants/userConstants";

function login(userMail, password) {
  return (dispatch) => {
    dispatch(request({ userMail }));

    userService.login(userMail, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error));
        //dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
export const UserActions = {
  login,
  logout,
};
