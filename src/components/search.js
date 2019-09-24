import React, { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PopupDialog from "./popupDialog";
import SearchIcon from "@material-ui/icons/Search";

import { spotifySearch } from "../api/api.js";
import SearchDisplay from "./searchDisplay";

const Search = ({
  token,
  history,
  match,
  user,
  recommendList,
  setRecommendList
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [dialog, setDialog] = useState("");
  const { query } = match.params;
  const onSearchHandler = () => {
    history.push("/search/" + searchInput);
  };
  const addItemToRecommendList = item => {
    console.log(item);

    if (recommendList.length >= 5) {
      alert("Recommendlist exceeded 5 entries");
      return;
    }
    switch (item.type) {
      case "artist": {
        setRecommendList([
          ...recommendList,
          {
            url: item.images && !!item.images.length && item.images[0].url,
            name: item.name,
            id: item.id,
            key: recommendList.length + item.id,
            type: item.type
          }
        ]);
        break;
      }
      case "track": {
        setRecommendList([
          ...recommendList,
          {
            name: item.name,
            id: item.id,
            key: recommendList.length + item.id,
            artist: item.artists[0].name,
            type: item.type
          }
        ]);
        break;
      }
    }
  };
  useEffect(() => {
    //called on mount and on query update
    if (!token) {
      history.push("/");
    }
    if (query) {
      spotifySearch(token, query).then(res => setSearchResult(res));
    }
  }, [query]);
  return (
    <React.Fragment>
      <div style={{ height: "30em", position: "relative" }}>
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="gradient-black">
          <section
            className="width center ptop pad"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1>{user && "Welcome, " + user.display_name + "!"}</h1>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap"
              }}
            >
              <p style={{ width: "12em", margin: "2em" }}>
                Choose up to 5 artists/tracks and get a recommended playlist
                based on those!
              </p>
              <p style={{ width: "12em", margin: "2em" }}>
                Click on an artist name to get more information about the
                artist!
              </p>
            </div>
            <Paper
              style={{
                borderRadius: "50px",
                paddingLeft: "1em"
              }}
            >
              <InputBase
                style={{ fontFamily: "Circular" }}
                autoFocus
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search Spotify"
              />
              <IconButton onClick={onSearchHandler}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </section>
        </div>
      </div>
      {searchResult && (
        <div>
          <h2 style={{ textAlign: "center" }}>Search results for "{query}"</h2>
          <section className="center width pad">
            <SearchDisplay
              type="artists"
              result={searchResult}
              setDialog={setDialog}
              addItemToRecommendList={addItemToRecommendList}
            />
          </section>
          <section className="center width pad">
            <SearchDisplay
              type="albums"
              result={searchResult}
              setDialog={setDialog}
              addItemToRecommendList={addItemToRecommendList}
            />
          </section>
          <section className="center width pad">
            <SearchDisplay
              type="tracks"
              result={searchResult}
              setDialog={setDialog}
              addItemToRecommendList={addItemToRecommendList}
            />
          </section>
        </div>
      )}
      {!!dialog && (
        <PopupDialog dialog={dialog} setDialog={setDialog} token={token} />
      )}
    </React.Fragment>
  );
};

export default Search;
