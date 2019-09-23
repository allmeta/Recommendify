import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Header = ({ token, user }) => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#00000088",
        padding: "0 1em"
      }}
    >
      <Toolbar
        style={{
          maxWidth: "60em",
          width: "100%",
          alignSelf: "center",
          padding: "0"
        }}
      >
        <Link
          to="/search"
          style={{
            display: "flex",
            textDecoration: "none",
            alignItems: "center"
          }}
        >
          <Avatar src="https://open.spotify.com/static/images/icons/Spotify_1024.png" />
          <Typography
            variant="h5"
            noWrap
            style={{ color: "#1ed760", fontFamily: "Circular" }}
          >
            <strong style={{ fontWeight: 400 }}>Recommend</strong>
            <strong style={{ color: "white", fontWeight: 900 }}>ify</strong>
          </Typography>
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Avatar src={user && user.images[0].url} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
