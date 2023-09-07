// import logo from './logo.svg';
import React from 'react';
import { Route,BrowserRouter as Router, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

import Users from './user/pages/Users';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route path='/' exact >
          <h2>hell</h2>
        </Route>
        <Route path='/hello' exact>
          <h1>chutp chuitye</h1>
        </Route>
        <Route path='/pa' exact>
          <Users/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

export default App;
