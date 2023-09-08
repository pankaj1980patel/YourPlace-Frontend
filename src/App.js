// import logo from './logo.svg';
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlaces from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";

import "./App.css";

import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users/>
          </Route>
          <Route path='/:usedId/places' exact>
            <UserPlaces/>
          </Route>
          <Route path="/paces/new" exact>
            <NewPlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
