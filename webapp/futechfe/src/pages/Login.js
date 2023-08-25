import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
        <Button fullWidth={true} variant="contained" style={{ margin: "5px" }}>
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
