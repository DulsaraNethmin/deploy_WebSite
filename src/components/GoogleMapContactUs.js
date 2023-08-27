import React from "react";
import GoogleMapReact from "google-map-react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnyReactComponent = ({ text }) => (
  <div>
    {text}
    <FontAwesomeIcon icon={faLocationDot} size="3x" color="#e44650" />
  </div>
);

function GoogleMapContactUs() {
  const defaultProps = {
    center: {
      lat: -33.870453,
      lng: 151.208755,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "50vh", width: "100%" }} className="static">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC8QtbYnjwF0t2uH_bMPifyoW2k4qdrQqM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={-33.870453} lng={151.208755} text="" />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMapContactUs;
