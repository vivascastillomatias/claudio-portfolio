import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Electricidad from './Pages/Electricidad';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/electricidad" component={Electricidad} exact/>
              <Route path="/" component={Home} exact/>
              <Route path="/" component={Home} exact/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;