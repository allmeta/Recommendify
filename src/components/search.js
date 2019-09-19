import React from "react";
import { Redirect } from "react-router-dom";

const Search = ({ token }) => {
  return token ? (
    <section>main page nice you can search here ehehe</section>
  ) : (
    <Redirect to="/auth" />
  );
};

export default Search;
