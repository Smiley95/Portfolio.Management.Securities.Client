export const userService = {
  login,
  logout,
};

function login(userMail, password) {
  var details = {
    username: userMail,
    password: password,
    grant_type: "password",
  };
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody,
  };

  return fetch("https://localhost:44334/token", requestOptions)
    .then(handleResponse)
    .then((token) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("token", JSON.stringify(token));

      return token;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("token");
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
