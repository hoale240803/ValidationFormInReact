import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/ReactHookForm/Login/Login";
import MultiStep from "./Components/ReactHookForm/MultiStep/MultiStep";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <MultiStep />
          </Route>
          <Route exact path="/">
            <h1>HomePage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
