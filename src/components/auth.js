import React, { useEffect } from "react";
import config from "../../config.json";
import { withRouter } from "react-router-dom";

const Authorize = ({ setToken, history }) => {
  useEffect(() => {
    const params = new URLSearchParams(new URL(location).hash.substr(1));
    if (params.has("access_token")) {
      setToken(params.get("access_token"));
      history.push("/");
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${config.id}&redirect_uri=${window.location.href}&response_type=token`;
    }
  }, []);
  return null;
};

export default withRouter(Authorize);
