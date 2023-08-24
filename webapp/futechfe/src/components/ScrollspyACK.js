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
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  return (
    <Paper elevation={8} style={paperStyle}>
      <h4>Acknowledged Tab</h4>
      <div id="parentScrollDiv" style={{ height: 500, overflow: "auto" }}>
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>WAIT...</p>}
          endMessage={<p>200 message limit has been reached.</p>}
          // height={500}
          scrollableTarget="parentScrollDiv"
        >
          {dataSource.map((item, index) => {
            return <div style={div_style}>This is MSG number #{index + 1}</div>;
          })}
        </InfiniteScroll>
      </div>
    </Paper>
  );
}
