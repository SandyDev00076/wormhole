import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { FirstHelloPage } from './components/FirstPage/FirstPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FirstHelloPage}/>
      </Switch>
    </Router>
  );
}

export default App;
