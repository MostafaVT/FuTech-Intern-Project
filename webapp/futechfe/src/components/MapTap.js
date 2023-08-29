import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Button } from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";

const MapTap = (props) => {
  const { isLoaded } = props;
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  const center = {
    lat: 30.0444,
    lng: 31.2357,
  };

  const navigate = useNavigate();
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  return (
    <div>
      <Paper elevation={8} style={paperStyle}>
        <h4>Map Tab</h4>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        )}
      </Paper>
    </div>
  );
};

export default MapTap;
