import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MusicNote from "@material-ui/icons/MusicNote";
import Menu from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import DialogActions from "@material-ui/core/DialogActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const RecommendationList = ({ recommendList, setRecommendList, history }) => {
  const [showList, setShowList] = useState(false);
  const iconMap = {
    artist: <AccountCircle />,
    tracks: <MusicNote />
  };
  const handleDelete = e => {
    setRecommendList(recommendList.filter(x => e.key != x.key));
  };
  if (location.pathname == "/") {
    return <div></div>;
  }
  return (
    <div>
      <div
        style={{
          width: "5em",
          position: "fixed",
          textAlign: "center",
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
          right: "1em",
          bottom: "1em",
          height: "5em",
          padding: "1em",
          borderRadius: "500px",
          backgroundColor: "#1ed760",
          cursor: "pointer"
        }}
        onClick={() => setShowList(true)}
      >
        <Menu style={{ width: "100%", height: "100%", color: "#181818" }} />
      </div>
      <Dialog
        open={showList}
        onClose={() => setShowList(false)}
        PaperProps={{
          style: {
            backgroundColor: "#282828",
            color: "white"
          }
        }}
      >
        <DialogTitle>Recommendation list</DialogTitle>
        <List>
          {!recommendList.length && <ListItem>List is empty</ListItem>}

          {recommendList.map(x => {
            return (
              <ListItem key={x.key}>
                <ListItemAvatar>
                  <Avatar src={x.url ? x.url : null}>{iconMap[x.type]}</Avatar>
                </ListItemAvatar>
                <ListItemText>{x.name}</ListItemText>
                <ListItemSecondaryAction
                  onClick={() => handleDelete(x)}
                  style={{ fontSize: "200%", cursor: "pointer" }}
                >
                  &times;
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <DialogActions>
          {!!recommendList.length && (
            <Button
              onClick={() => {
                history.push("/recommend");
                setShowList(false);
              }}
              style={{
                color: "#1ed760",
                fontWeight: "600",
                fontFamily: "Circular"
              }}
            >
              Recommend
            </Button>
          )}
          <Button
            onClick={() => setShowList(false)}
            style={{
              color: "#1ed760",
              fontWeight: "600",
              fontFamily: "Circular"
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default withRouter(RecommendationList);
