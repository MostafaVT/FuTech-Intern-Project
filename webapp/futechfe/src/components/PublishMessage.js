import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PublishMessage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  const [id, setID] = useState("");
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");
  const [msgs, setMsgs] = useState([]);

  const handleClickPUB = (e) => {
    e.preventDefault();
    const msg = { id, source, content };
    console.log(msg);
    let response = fetch("http://localhost:8081/jms/publishMessage", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(() => {
      console.log(response.json);
    });
    window.location.reload();
  };

  useEffect(() => {
    let response = fetch("http://localhost:8080/jms/getAll")
      .then((res) => res.json())
      .then((result) => {
        setMsgs(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickACK = (e) => {
    let response = fetch("http://localhost:8080/jms/setACK?id=" + e).then(
      () => {
        console.log(response.json);
      }
    );
  };

  return (
    <Container>
      {/* <Paper elevation={3} style={paperStyle}>
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
            style={{ padding: "5px", margin: "5px" }}
            id="outlined-basic"
            label="Source"
            variant="outlined"
            fullWidth
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <TextField
            style={{ padding: "5px", margin: "5px" }}
            id="outlined-basic"
            label="Message"
            variant="outlined"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleClickPUB}
            style={{ padding: "5px", margin: "5px" }}
          >
            Publish
          </Button>
        </form>
      </Paper> */}
      <Paper elevation={3} style={paperStyle}>
        <h4>Live Messages</h4>
        <div id="parentScrollDiv" style={{ height: 500, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={msgs.length}
            hasMore={true}
            // loader={<p>WAIT...</p>}
            endMessage={<p>200 message limit has been reached.</p>}
            scrollableTarget="parentScrollDiv"
          >
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
                Content : {msg.content}
                <Button
                  variant="contained"
                  onClick={handleClickACK.bind(this, msg.id)}
                  style={{ padding: "5px", margin: "5px" }}
                >
                  Acknowledged
                </Button>
              </Paper>
            ))}
          </InfiniteScroll>
        </div>
      </Paper>
    </Container>
  );
}
