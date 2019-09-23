import React from "react";
import Typography from "@material-ui/core/Typography";
import AddCircle from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  hover: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
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
  img: {
    height: "128px"
  },
  title: { maxWidth: "10em", color: "white" },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "1em"
  },
  artist: {
    color: "grey",
    textDecoration: "underline",
    cursor: "pointer",
    fontFamily: "Circular",
    "&:hover": {
      color: "white"
    }
  }
}));

const Album = ({ items, setDialog }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((i, index) => (
        <div key={i.name + index} className="album">
          <div style={{ position: "relative" }}>
            <img
              className={classes.img}
              src={(i.images && !!i.images.length && i.images[1].url) || null}
            />
            <div className={classes.hover}>
              <AddCircle
                className={classes.add}
                onClick={() => setDialog(i.id)}
              />
            </div>
          </div>
          <div className={classes.info}>
            <div>
              <Typography className={classes.title}>{i.name}</Typography>
              <Typography
                variant="subtitle1"
                className={classes.artist}
                onClick={() => setDialog(i.artists[0].id)}
              >
                {i.artists[0].name}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;
