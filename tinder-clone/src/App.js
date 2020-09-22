import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chatpag</h1>
          </Route>
          <Route path="/">
            <h1>I am the homepage</h1>
          </Route>
        </Switch>
      </Router>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
