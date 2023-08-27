import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { Container, Paper, Button } from "@mui/material";

const div_style = {
  border: "10px soild red",
  margin: 6,
  padding: 4,
};

export default function ScrollspyACK() {
  const [ACKMsgs, setACKMsgs] = useState([]);
  const [id, setID] = useState("");
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  const fetchMoreData = () => {
    // if (ACKMsgs.length < 200) {
    //   setTimeout(() => {
    //     setACKMsgs(ACKMsgs.concat(Array.from({ length: 20 })));
    //   }, 500);
    // } else {
    //   setHasMore(false);
    // }
  };

  const handleClickAction = (e) => {
    let response = fetch("http://localhost:8080/jms/setAction?id=" + e).then(
      () => {
        console.log(response.json);
      }
    );
  };

  useEffect(() => {
    let response = fetch("http://localhost:8080/jms/getACK")
      .then((res) => res.json())
      .then((result) => {
        setACKMsgs(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Paper elevation={8} style={paperStyle}>
      <h4>Acknowledged Tab</h4>
      <div id="parentScrollDiv" style={{ height: 500, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={ACKMsgs.length}
          next={fetchMoreData}
          hasMore={hasMore}
          // loader={<p>WAIT...</p>}
          endMessage={<p>200 message limit has been reached.</p>}
          // height={500}
          scrollableTarget="parentScrollDiv"
        >
          {ACKMsgs.map((msg = { id, content, source }) => {
            return (
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
                  onClick={handleClickAction.bind(this, msg.id)}
                  style={{ padding: "5px", margin: "5px" }}
                >
                  Action
                </Button>
              </Paper>
            );
          })}
        </InfiniteScroll>
      </div>
    </Paper>
  );
}
