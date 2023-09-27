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
        {/* {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        )} */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.7844939139347!2d31.439726917830853!3d29.988266718697734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cade68595f5%3A0x1a1d41f0b31aeebf!2sGUC%20Admission%20Office!5e1!3m2!1sen!2seg!4v1694423247958!5m2!1sen!2seg"
          //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.7250877961255!2d31.435660075084108!3d29.98732972127534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d23fc96eed7%3A0x364e0a19bd725939!2sGUC%20gate%203!5e0!3m2!1sen!2seg!4v1694422970531!5m2!1sen!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </Paper>
    </div>
  );
};

export default MapTap;
