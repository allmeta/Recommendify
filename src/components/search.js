import React, { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PopupDialog from "./popupDialog";
import SearchIcon from "@material-ui/icons/Search";

import { spotifySearch } from "../api/api.js";
import SearchDisplay from "./searchDisplay";

const Search = ({ token, history, match, user }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [dialog, setDialog] = useState("");
  const onSearchHandler = () => {
    history.push("/search/" + searchInput);
    spotifySearch(token, searchInput).then(res => setSearchResult(res));
  };
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    if (match.params.q) {
      spotifySearch(token, match.params.q).then(res => setSearchResult(res));
    }
  }, []);
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
            <h2>{user && "Welcome, " + user.display_name + "!"}</h2>
            <p>
              Add artists and songs to the list and get songs recommended to you
              based on the list!
            </p>
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
          <h2 style={{ textAlign: "center" }}>
            Search results for "{match.params.q}"
          </h2>
          <section className="center width pad">
            <SearchDisplay
              type="artists"
              result={searchResult}
              setDialog={setDialog}
            />
          </section>
          <section className="center width pad">
            <SearchDisplay
              type="albums"
              result={searchResult}
              setDialog={setDialog}
            />
          </section>
          <section className="center width pad">
            <SearchDisplay
              type="tracks"
              result={searchResult}
              setDialog={setDialog}
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
