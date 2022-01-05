import React from "react";
import PlacesAutoComplete from "./PlacesAutoComplete";

const SearchForm = (props) => {
  const handleOriginChange = (originValue) => {
    props.setOrigin(originValue);
  };

  const handleDestinationChange = (destinationValue) => {
    props.setDestination(destinationValue);
  };

  return (
    <form onSubmit={handleSearchFormSubmit}>
      <PlacesAutoComplete onOriginChange={handleOriginChange} />
      <PlacesAutoComplete onDestinationChange={handleDestinationChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchForm;
