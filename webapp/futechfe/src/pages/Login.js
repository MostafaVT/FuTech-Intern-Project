import React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className={`items-center flex h-screen flex-col w-screen justify-center bg-[url("assets/logo.jpg")] bg-cover bg-center`}
    >
      <Appbar></Appbar>

      <Paper
        elevation={5}
        className="rounded items-center justify-center flex flex-col p-3.5 max-w-sm"
      >
        <span className="text-xl my-5">Login Form</span>
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
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPass(!showPass)}
              >
                {!showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button fullWidth={true} variant="contained" style={{ margin: "5px" }}>
          Login
        </Button>
        <br />
        <Button
          variant="contained"
          style={{ margin: "5px", backgroundColor: "green" }}
          onClick={() => navigate("/signUp")}
        >
          Create New Account
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
