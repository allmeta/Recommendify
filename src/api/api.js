require("babel-polyfill");
const baseURL = "https://api.spotify.com/v1";

const spotifyFetch = ({ token, url, body }) =>
  fetch(baseURL + url, {
    headers: {
      Authorization: "Bearer " + token
    },
    body
  }).then(res => res.json());

export const spotifySearch = (token, query, type, page) => {
  const limit = 20;
  return spotifyFetch({
    token,
    url:
      "/search" +
      `?q=${encodeURIComponent(query)}&type=${
        type ? type : "artist,album,track"
      }&offset=${page ? limit * page + 1 : 1}`
  });
};
export const getUser = token => spotifyFetch({ token, url: "/me" });

export const getArtist = (token, id) =>
  spotifyFetch({ token, url: "/artists/" + id });

export const getAlbums = (token, id) =>
  spotifyFetch({ token, url: "/artists/" + id + "/albums" });
