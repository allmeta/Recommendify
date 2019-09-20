import React, { useEffect } from "react";
import moment from "moment";
import config from "../../config.json";
import { withRouter } from "react-router-dom";

const Authorize = ({ setToken, history }) => {
  useEffect(() => {
    const params = new URLSearchParams(new URL(location).hash.substr(1));
    if (params.has("access_token")) {
      setToken(params.get("access_token"));
      localStorage.setItem("access_token", params.get("access_token"));
      localStorage.setItem(
        "exp",
        moment()
          .add(3600, "s")
          .format()
      );
      history.push("/");
    } else {
      // get auth token
      window.location = `https://accounts.spotify.com/authorize?client_id=${config.id}&redirect_uri=${window.location.href}&response_type=token`;
    }
  }, []);
  return null;
};

export default withRouter(Authorize);
