import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import moment from "moment";
import Header from "./components/header";
import Footer from "./components/footer";
import Search from "./components/search";
import { getUser } from "./api/api.js";
import Welcome from "./components/welcome";
import RecommendationList from "./components/recommendationList";
import Recommend from "./components/recommend";

const tokenExpired = () => {
  let exp = localStorage.getItem("exp");
  return !exp || moment(exp).diff(moment()) < 0;
};

const App = ({ history }) => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const [user, setUser] = useState(null);
  const [expired, setExpired] = useState(tokenExpired());
  const [recommendList, setRecommendList] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams(new URL(location).hash.substr(1));
    if (params.has("access_token")) {
      // when returning from redirect
      setToken(params.get("access_token"));
      localStorage.setItem("access_token", params.get("access_token"));
      localStorage.setItem(
        "exp",
        moment()
          .add(3600, "s")
          .format()
      );

      getUser(params.get("access_token"))
        .then(res => setUser(res))
        .then(_ => history.push("/search"));
    }
    if (token && !expired) {
      //token found, ready to get user
      getUser(token).then(res => setUser(res));
    } else {
      history.push("/");
    }
  }, []);
  return (
    <React.Fragment>
      <Header token={token} user={user} />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Welcome token={token} expired={expired} />}
          />
          <Route
            path="/search/:query?"
            render={props => (
              <Search
                token={token}
                user={user}
                recommendList={recommendList}
                setRecommendList={setRecommendList}
                {...props}
              />
            )}
          />
          <Route
            path="/recommend"
            render={props => (
              <Recommend
                token={token}
                recommendList={recommendList}
                {...props}
              />
            )}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <RecommendationList
        recommendList={recommendList}
        setRecommendList={setRecommendList}
      />
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(App);
