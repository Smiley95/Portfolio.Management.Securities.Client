export const fmpService = {
  gainers,
  //losers,
  //assets,
};

function gainers() {
  var details = {
    apikey: "f3a7dffee1995d2e2749d2447cd0ca85",
  };
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: formBody,
  };
  return fetch(
    "https://financialmodelingprep.com/api/v3/gainers?apikey=f3a7dffee1995d2e2749d2447cd0ca85"
  ).then(handleResponse);
}

// function losers() {
//   // remove user from local storage to log user out
//   localStorage.removeItem("token");
// }

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log("cannot retrieve gainers");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
