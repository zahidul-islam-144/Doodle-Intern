import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: "80px",
  border: "1px solid green",
  margin: "6px",
  padding: "8px",
};
class InfiniteScrollClass extends Component {
  state = {
    apiData: [],
    hasMore: true,
    pageNum: 1,
  };

  fetchApiData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${this.state.pageNum}`
    );
    const response = await data.json();
    if (response) {
      this.setState({ apiData: response, pageNum: this.state.pageNum + 1 });
    }
  };

  fetchMoreData = async () => {
    const data2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${this.state.pageNum}`
    );
    const response2 = await data2.json();
    if (response2) {
      this.setState({ apiData: [...this.state.apiData, ...response2] });
    }
    if (response2.length === 0 || response2.length < 10) {
      this.setState({ hasMore: false });
    }
    this.setState({ pageNum: this.state.pageNum + 1 });
  };

  componentDidMount() {
    this.fetchApiData();
  }

  render() {
    const { apiData, hasMore, pageNum } = this.state;
    console.log("=", pageNum + 1);
    console.log("apidata:", apiData);
    return (
      <div>
        {/* {apiData?.map((post) => (
          <React.Fragment>
            <div>{post?.userId}</div>
          </React.Fragment>
        ))} */}

        <InfiniteScroll
          dataLength={apiData?.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h5>Shob data dekhe shes kore felso ! </h5>}
        >
          {apiData?.map((post) => (
            <React.Fragment>
              <div style={style}>{post?.userId}</div>
            </React.Fragment>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default InfiniteScrollClass;
