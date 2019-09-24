import React, { useState } from "react";
import Album from "./album";
import Artist from "./artist";
import Track from "./track";

const SearchDisplay = ({ type, result, ...props }) => {
  const typeToComponent = {
    artists: Artist,
    albums: Album,
    tracks: Track
  };
  return (
    result &&
    !!result[type].items.length && (
      <React.Fragment>
        <h2 style={{ marginLeft: "1em" }}>
          {type[0].toUpperCase() + type.substr(1)}
        </h2>
        {typeToComponent[type]({ items: result[type].items, ...props })}
      </React.Fragment>
    )
  );
};

export default SearchDisplay;
