import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

export default function PublishMessage() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");
  const [msgs, setMsgs] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const msg = { source, message };
    console.log(msg);

    fetch("http://localhost:8081/publishMessage", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(() => {
      console.log("New msg sent.");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/getAll")
      .then((res) => res.json())
      .then((result) => {
        setMsgs(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>Publish message to the Broker</h1>
        <form
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Source"
            variant="outlined"
            fullWidth
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Publish
          </Button>
        </form>
      </Paper>
      <h1>Messages</h1>
      <Paper elevation={3} style={paperStyle}>
        {msgs.map((msg) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={msg.id}
          >
            ID : {msg.id}
            <br></br>
            Source : {msg.source}
            <br></br>
            Message : {msg.message}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
