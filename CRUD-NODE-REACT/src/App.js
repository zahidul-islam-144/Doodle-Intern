import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Update from "./components/Update/Update";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/details/:id">
            <Details></Details>
          </Route>

          <Route path="/update/:id">
            <Update></Update>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
