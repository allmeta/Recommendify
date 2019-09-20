import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import moment from "moment";
import Header from "./components/header";
import Footer from "./components/footer";
import Artist from "./components/artist";
import Search from "./components/search";
import Authorize from "./components/auth";

const App = props => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const tokenExpired = () => {
    let exp = localStorage.getItem("exp");
    return !exp || moment(exp).diff(moment()) < 0;
  };
  useEffect(() => {
    if (!token || tokenExpired()) {
      //token not found or expired
      props.history.push("/auth");
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={() => <Search token={token} />} />
          <Route
            path="/auth"
            component={() => <Authorize setToken={setToken} />}
          />
          <Route
            path="/artist/:id"
            component={() => <Artist token={token} />}
          />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(App);
