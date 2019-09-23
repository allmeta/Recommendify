import React, { useState } from "react";
import Album from "./album";
import Artist from "./artist";
import Track from "./track";

const SearchDisplay = ({ type, result, setDialog }) => {
  const typeToComponent = {
    artists: Artist,
    albums: Album,
    tracks: Track
  };
  return (
    result &&
    !!result[type].items.length && (
      <React.Fragment>
        <h2>{type[0].toUpperCase() + type.substr(1)}</h2>
        {typeToComponent[type]({ items: result[type].items, setDialog })}
      </React.Fragment>
    )
  );
};

export default SearchDisplay;
