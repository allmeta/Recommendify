import React from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AddCircle from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  avatar: {
    width: "5em",
    height: "5em",
    position: "relative"
  },
  rel: {
    position: "relative"
  },
  hover: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: "100%",
    left: 0,
    top: 0,
    zIndex: 2,
    opacity: 0,
    transition: "all .1s",
    cursor: "pointer",
    backgroundColor: "#000000a0",
    "&:hover": { opacity: 1 }
  },
  add: {
    fontSize: "300%",
    color: "1ed760"
  },
  title: {
    textDecoration: "underline",
    cursor: "pointer",
    maxWidth: "7em",
    textAlign: "center",
    color: "grey",
    fontFamily: "Circular",
    "&:hover": {
      color: "white"
    }
  }
}));

const Artist = ({ items, setDialog }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((i, index) => (
        <div key={i.name + index} className="artist">
          <div className={classes.rel}>
            <Avatar
              onClick={() => setDialog(i.id)}
              className={classes.avatar}
              src={(!!i.images.length && i.images[1].url) || null}
            >
              <AccountCircle className={classes.avatar} />
            </Avatar>
            <div className={classes.hover}>
              <AddCircle className={classes.add} />
            </div>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.title}
            onClick={() => setDialog(i.id)}
          >
            {i.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Artist;
