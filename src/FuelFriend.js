import React, { useState } from "react";
import "./FuelFriend.css";
import SearchForm from "./SearchForm";
import Map from "./Map";

function FuelFriend() {
  const [origin, setOrigin] = useState("kingsley");
  const [destination, setDestination] = useState("balcatta");

  return (
    <div className="FuelFriend">
      <SearchForm
        origin={origin}
        destination={destination}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Map origin={origin} destination={destination} />
    </div>
  );
}

export default FuelFriend;
