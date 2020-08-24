// function loadPortfolios(user, token) {
//   loadInvestors(user, token).then((investor) => {
//     return investor["Portfolio"];
//   });
// }

function loadPortfolios(user, token) {
  const userJ = JSON.parse(user);
  const tokenJ = JSON.parse(token);

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenJ["access_token"],
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userJ.userMail),
  };
  console.log(requestOptions);
  return fetch(
    "https://localhost:44334/api/Investors/GetInvestorsByExpert",
    requestOptions
  )
    .then(handleResponse)
    .then((clients) => {
      return clients;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log("401 error");
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const portfoliosServices = {
  loadPortfolios,
  //loadInvestors,
};
