// import logo from './logo.svg';
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

import "./App.css";

import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <h2>hell</h2>
          </Route>
          <Route path="/hello" exact>
            <h1>chutp chuitye</h1>
          </Route>
          <Route path="/pa" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
