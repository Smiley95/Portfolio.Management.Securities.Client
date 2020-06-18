import * as types from "./actionTypes";

export function loginRequest(user) {
  return { type: types.LOGIN_REQUEST, user };
}
export function loginSuccess(user) {
  return { type: types.LOGIN_SUCCESS, user };
}
export function loginFailure(error) {
  return { type: types.LOGIN_FAILURE, error };
}

export function login(mail, password) {
  return (dispatch) => {
    dispatch(loginRequest({ mail, password }));
    userService.login(mail, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

export function logout() {
  userService.logout();
  return { type: types.LOGOUT };
}
