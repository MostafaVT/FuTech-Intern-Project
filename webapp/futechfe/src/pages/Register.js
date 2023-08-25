import React, { useState } from "react";
import Appbar from "../components/Appbar";
import { Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function RegisterPage() {
  const paperStyle = {
    padding: "25px 10px",
    width: "50%",
    margin: "20px auto",
  };

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const user = { username, firstName, lastName, email, password };
    console.log(user);
    fetch("http://localhost:8081/register", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("New user register.");
    });
  };

  return (
    <div>
      <Appbar></Appbar>
      <Paper elevation={10} style={paperStyle}>
        <div>
          <h2>Register Page</h2>
          <form
            component="form"
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
            style={{ padding: "50px 20px", margin: "20px" }}
          >
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                style={{ padding: "5px", margin: "5px" }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              style={{ margin: "25px" }}
              onClick={handleClick}
            >
              Register
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}
