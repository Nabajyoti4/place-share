import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//Pages
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
