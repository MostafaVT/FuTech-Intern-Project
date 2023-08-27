import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { Container, Paper, Button } from "@mui/material";

const div_style = {
  border: "10px soild red",
  margin: 6,
  padding: 4,
};

export default function ActionTab() {
  const [ActionMsgs, setActionMsgs] = useState([]);
  const [id, setID] = useState("");
  const [source, setSource] = useState("");
  const [content, setContent] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  const fetchMoreData = () => {
    // if (dataSource.length < 200) {
    //   setTimeout(() => {
    //     setDataSource(dataSource.concat(Array.from({ length: 20 })));
    //   }, 500);
    // } else {
    //   setHasMore(false);
    // }
  };

  useEffect(() => {
    let response = fetch("http://localhost:8080/jms/getAction")
      .then((res) => res.json())
      .then((result) => {
        setActionMsgs(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Paper elevation={8} style={paperStyle}>
      <h4>Action Tab</h4>
      <div id="parentScrollDiv" style={{ height: 500, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={ActionMsgs.length}
          next={fetchMoreData}
          hasMore={hasMore}
          // loader={<p>WAIT...</p>}
          endMessage={<p>200 message limit has been reached.</p>}
          scrollableTarget="parentScrollDiv"
        >
          {ActionMsgs.map((msg = { id, content, source }) => {
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
              </Paper>
            );
          })}
        </InfiniteScroll>
      </div>
    </Paper>
  );
}
