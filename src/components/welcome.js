import React from "react";
import Button from "@material-ui/core/Button";
import config from "../../config.json";
import { Redirect } from "react-router-dom";

const Welcome = ({ token, expired }) => {
  if (token && !expired) {
    return <Redirect to="/search" />;
  }
  return (
    <section className="width-small center ptop pad">
      <h2 style={{ textAlign: "center" }}>Welcome!</h2>
      <p>
        I am using spotify's API for this app, and that requires you to have a
        spotify account.
      </p>
      <p>
        If you don't, it's free to{" "}
        <Button
          href="http://spotify.com"
          style={{ color: "#1ed760", fontWeight: "700" }}
        >
          sign up here
        </Button>
      </p>
      <p>
        Each session only lasts for 1 hour, but it's easy to get a new token!
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#1ed760",
            color: "white",
            borderRadius: "500px",
            fontWeight: "700",
            width: "10em"
          }}
          href={`https://accounts.spotify.com/authorize?client_id=${config.id}&redirect_uri=${window.location.origin}&response_type=token`}
        >
          Get token
        </Button>
      </div>
    </section>
  );
};

export default Welcome;
