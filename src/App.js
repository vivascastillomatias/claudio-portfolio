import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import Electricidad from './Pages/Electricidad';
import Refrigeracion from './Pages/Refrigeracion';
import Gasista from './Pages/Gasista';
import Refacciones from './Pages/Refacciones';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/electricidad" component={Electricidad} exact/>
              <Route path="/refrigeracion" component={Refrigeracion} exact/>
              <Route path="/gasista" component={Gasista} exact/>
              <Route path="/refacciones" component={Refacciones} exact/>
              <Redirect to="/" />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;