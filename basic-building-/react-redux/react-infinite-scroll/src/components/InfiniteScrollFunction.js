import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollFunction = () => {
  const [apiData, setApiData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  const style = {
    height: "80px",
    border: "1px solid green",
    margin: "6px",
    padding: "8px",
  };

  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}`
    );
    const response = await data.json();
    if (response) {
      setApiData(...apiData, response);
    }
    setPageNum(pageNum + 1);
  };

  const fetchMoreData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}`
    );
    const response = await data.json();
    console.log("response:", response);
    if (response) {
      setApiData([...apiData, ...response]);
    }
    if (response.length === 0 || response.length < 10) {
      setHasMore(false);
    }
    setPageNum(pageNum + 1);
  };

  console.log("apiData:", apiData);
  return (
    <React.Fragment>
      <h1>{apiData.length}</h1>
      <InfiniteScroll
        dataLength={apiData?.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h5>--- Shob data dekhe shes kore felso --- </h5>}
      >
        {apiData?.map((post) => (
          <React.Fragment>
            <div key={post.id} style={style}>
              {post?.id} {post?.title}
            </div>
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default InfiniteScrollFunction;
