import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { FirstHelloPage } from './components/FirstPage/FirstPage';
import { TalkingPage } from './components/TalkingPage/TalkingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/talk" component={TalkingPage} />
        <Route path="/"  component={FirstHelloPage} />
      </Switch>
    </Router>
  );
}

export default App;
