import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Intro from './components/Intro';
import AppSW from './components/AppSW';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={ Intro } />;
          <Route path="/login" component={ Login } />;
          <Route path="/appsw" component={ AppSW } />;
        </Switch>
    </div>
  );
}

export default App;
