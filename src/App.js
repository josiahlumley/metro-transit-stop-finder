import MetroRoutes from "./components/MetroRoutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Stops from "./components/Stops";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header></Header>
        <Switch className="bottom">
          <Route path="/stops">
            <Stops></Stops>
          </Route>
          <Route path="/">
            <MetroRoutes></MetroRoutes>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
