import {backend} from "./scripter.js"
export const makeUnauthenticatedAsync = async (route, body) => {
  const response = await fetch(backend + route, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const formattedResponse = await response.json();
  return formattedResponse;
};
export const makeAuthenticatedAsync = async (route, body) => {
  const token = getToken();
  const response = await fetch(backend + route, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization":`Bearer ${token}`
    },
    body: JSON.stringify(body),
  });

  const formattedResponse = await response.json();
  return formattedResponse;
};
export const makeAuthenticatedGetAsync = async (route) => {
  const token = getToken();
  const response = await fetch(backend + route, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization":`Bearer ${token}`
    },
  });

  const formattedResponse = await response.json();
  return formattedResponse;
};


const getToken = () => {
  const accessToken = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  return accessToken;
};