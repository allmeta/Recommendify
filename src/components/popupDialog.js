import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { getArtist, getAlbums } from "../api/api.js";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#181818",
    color: "white",
    backgroundBlendMode: "overlay",
    backgroundPosition: "center"
  },
  avatar: {
    width: "5em",
    height: "5em",
    position: "relative"
  },
  album: {
    display: "flex",
    flexDirection: "column",
    width: "5em",
    margin: "1em"
  },
  albumContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },
  albumCover: {
    width: "5em",
    height: "5em"
  },
  close: {
    color: "#1ed760",
    fontWeight: "600",
    fontFamily: "Circular"
  },
  title: {
    textAlign: "center",
    fontFamily: "Circular",
    fontWeight: 900
  },
  center: {
    textAlign: "center"
  }
}));

export default function PopupDialog({ token, setDialog, dialog }) {
  const [artist, setArtist] = React.useState(null);
  const [albums, setAlbums] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    setDialog("");
  };

  React.useEffect(() => {
    if (!!dialog) {
      getArtist(token, dialog).then(res => setArtist(res));
      // getAlbums(token, dialog).then(res => setAlbums(res));
    }
  }, [dialog]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={!!dialog}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        className: classes.root,
        style: {
          backgroundImage:
            (artist &&
              !!artist.images.length &&
              "url(" + artist.images[0].url + ")") ||
            ""
        }
      }}
    >
      {artist ? (
        <React.Fragment>
          <DialogTitle id="responsive-dialog-title" className={classes.title}>
            {artist.name}
          </DialogTitle>
          <DialogContent>
            <div className={classes.center}>{artist.genres.join(", ")}</div>
            <div className={classes.albumContainer}>
              <div>
                <h2>{artist.popularity}%</h2>
                <p>Popularity</p>
              </div>
              <div>
                <h2>{artist.followers.total}</h2>
                <p>Followers</p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.close}>
              Close
            </Button>
          </DialogActions>
        </React.Fragment>
      ) : (
        <CircularProgress />
      )}
    </Dialog>
  );
}
