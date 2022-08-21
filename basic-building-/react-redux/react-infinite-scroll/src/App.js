import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScrollClass from "./components/InfiniteScrollClass";
import InfiniteScrollFunction from "./components/InfiniteScrollFunction";
import LoadMorePagination from "./components/LoadMorePagination";
import ReadMoreLess from "./components/ReadMoreLess";

function App() {
  return (
    <div className="App">
      <h1 className="infinite-scroll">React Infinite Scroll</h1>
      {/* <InfiniteScrollClass /> */}
      {/* <InfiniteScrollFunction/> */}
      {/* <ReadMoreLess/> */}
      <LoadMorePagination />
    </div>
  );
}

export default App;
