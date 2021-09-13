import './App.css';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import PlanetProvider from './Context/PlanetProvider';
import Login from './components/Login';
import Intro from './components/Intro';
import PlanetTable from './components/PLanetTable';

function App() {
  return (
    <PlanetProvider>
    <div className="App">
        <Switch>
          <Route exact path="/" component={ Intro } />;
          <Route path="/login" component={ Login } />;
          <Route path="/planettable" component={ PlanetTable } />;
        </Switch>
    </div>
    </PlanetProvider>
  );
}

export default App;
