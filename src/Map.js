import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Map = (props) => {
  const [response, setResponse] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  const { origin } = props;
  const { destination } = props;

  const directionsCallback = (response) => {
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        setResponse(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: 0,
    lng: -180,
  };

  const directionsServiceOptions = {
    destination: destination,
    origin: origin,
    travelMode: travelMode,
  };

  const directionsRendereOptions = {
    directions: response,
  };

  return (
    <div>
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={mapContainerStyle}
        // required
        zoom={2}
        // required
        center={center}
        // optional
        onLoad={(map) => {
          console.log("DirectionsRenderer onLoad map: ", map);
        }}
        // optional
        onUnmount={(map) => {
          console.log("DirectionsRenderer onUnmount map: ", map);
        }}
      >
        {destination !== "" && origin !== "" && (
          <DirectionsService
            // required
            options={directionsServiceOptions}
            // required
            callback={directionsCallback}
            // optional
            onLoad={(directionsService) => {
              console.log(
                "DirectionsService onLoad directionsService: ",
                directionsService
              );
            }}
            // optional
            onUnmount={(directionsService) => {
              console.log(
                "DirectionsService onUnmount directionsService: ",
                directionsService
              );
            }}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            // required
            options={directionsRendereOptions}
            // optional
            onLoad={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onLoad directionsRenderer: ",
                directionsRenderer
              );
            }}
            // optional
            onUnmount={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onUnmount directionsRenderer: ",
                directionsRenderer
              );
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
