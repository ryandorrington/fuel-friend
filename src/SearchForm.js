import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutoComplete";

const SearchForm = (props) => {
  const handleSearchFormSubmit = (event) => {
    props.setOrigin(event.target[0].value);
    props.setDestination(event.target[1].value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearchFormSubmit}>
      <PlacesAutoComplete />
      <PlacesAutoComplete />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchForm;
