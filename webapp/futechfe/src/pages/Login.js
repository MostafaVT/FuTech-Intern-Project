import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const loginTry = { email, password };
    console.log(loginTry);
    let response = fetch("http://localhost:8080/login", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginTry),
    }).then(() => {
      console.log(response.json);
    });
  };

  return (
    <div>
      <Appbar></Appbar>
      <Paper
        elevation={10}
        style={{ padding: "25px 10px", width: "50%", margin: "20px auto" }}
      >
        <h2>Login Page</h2>
        <OutlinedInput
          style={{ padding: "5px", margin: "5px" }}
          placeholder="Email"
          fullWidth={true}
          size="small"
          onChange={(e) => setEmail(e.target.value)}
        />
        <OutlinedInput
          style={{ padding: "5px", margin: "5px" }}
          fullWidth={true}
          placeholder="Password"
          size="small"
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"}
        />
        <Button
          fullWidth={true}
          variant="contained"
          style={{ margin: "5px" }}
          onClick={handleClick}
        >
          Login
        </Button>
        <br />
        <Button
          variant="contained"
          style={{ margin: "25px", backgroundColor: "green" }}
          onClick={() => navigate("/register")}
        >
          Create New Account
        </Button>
      </Paper>
    </div>
  );
}
