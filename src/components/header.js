import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "#00000088" }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
        <Avatar src="https://open.spotify.com/static/images/icons/Spotify_1024.png" />
        <Typography
          variant="h5"
          noWrap
          style={{ color: "#1ed760", fontFamily: "Circular" }}
        >
          <strong style={{ fontWeight: 400 }}>Recommend</strong>
          <strong style={{ color: "white", fontWeight: 900 }}>ify</strong>
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
