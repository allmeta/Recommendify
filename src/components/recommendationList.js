import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MusicNote from "@material-ui/icons/MusicNote";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const RecommendationList = ({ recommendList, setRecommendList, history }) => {
  const iconMap = {
    artist: <AccountCircle />,
    tracks: <MusicNote />
  };
  const handleDelete = e => {
    setRecommendList(recommendList.filter(x => e.key != x.key));
  };
  return (
    <section
      style={{
        position: "fixed",
        zIndex: 2,
        bottom: 0,
        left: 0,
        right: 0,
        // height: "3em",
        backgroundColor: "#1ed760",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "auto",
        padding: "0 2em"
      }}
    >
      {recommendList.map(x => {
        return (
          <Chip
            key={x.key}
            avatar={<Avatar src={x.url}>{iconMap[x.type]}</Avatar>}
            label={x.name}
            onDelete={() => handleDelete(x)}
            //   style={{ color: "white", backgroundColor: "181818" }}
          />
        );
      })}
      {!!recommendList.length ? (
        <Button
          onClick={() => history.push("/recommend")}
          style={{
            color: "white",
            fontFamily: "Circular",
            fontWeight: "600"
          }}
        >
          Recommend
        </Button>
      ) : (
        <h1>List is empty</h1>
      )}
    </section>
  );
};

export default withRouter(RecommendationList);
