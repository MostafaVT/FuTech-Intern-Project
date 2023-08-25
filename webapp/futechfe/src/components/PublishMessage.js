import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

export default function PublishMessage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");
  const [msgs, setMsgs] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const msg = { source, content };
    console.log(msg);
    fetch("http://localhost:8081/publishMessage", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(() => {
      console.log("New msg sent.");
    });
    window.location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:8080/getAll")
      .then((res) => res.json())
      .then((result) => {
        setMsgs(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h4>Publish Message to the Broker</h4>
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button variant="contained" onClick={handleClick}>
            Publish
          </Button>
        </form>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        <h4>Live Messages</h4>
        {msgs.map((msg) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={msg.id}
          >
            Source : {msg.source}
            <br></br>
            Content : {msg.content}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
