const baseURL = "https://api.spotify.com/v1";

const spotifyFetch = ({ token, url, body }) => {
  return fetch(baseURL + url, {
    headers: {
      Authorization: "Bearer " + token
    },
    body
  }).then(res => res.json());
};

export const spotifySearch = (token, query) => {
  return spotifyFetch({ token, url: "/search" + query });
};
export const getUser = token => {
  return fetch(baseURL + "/me").then(res => res.json());
};
