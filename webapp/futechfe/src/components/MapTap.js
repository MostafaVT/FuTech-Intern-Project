import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Button } from "@mui/material";

export default function MapTap() {
  const navigate = useNavigate();
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  return (
    <div>
      <Paper elevation={8} style={paperStyle}>
        <h4>Map Tab</h4>
      </Paper>
    </div>
  );
}
