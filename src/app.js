import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Artist from "./components/artist";
import Search from "./components/search";
import Authorize from "./components/auth";

const App = props => {
  const [token, setToken] = useState(undefined);
  return (
    <article>
      <Header />
      <div>{token}</div>
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
    </article>
  );
};

export default withRouter(App);
