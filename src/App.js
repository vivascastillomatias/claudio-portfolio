import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

//PAGINAS
import Home from './Pages/Home';
import Electricidad from './Pages/Electricidad';
import Refrigeracion from './Pages/Refrigeracion';
import Gasista from './Pages/Gasista';
import Refacciones from './Pages/Refacciones';


//COMPONENTES
import Header from './Components/shared/Header';
import Footer from './Components/shared/Footer';

function App() {
  
  return (
    <>
      <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
            <Header/>
          <Switch>
              <Route path="/home" component={Home} exact/>
              <Route path="/electricidad" component={Electricidad} exact/>
              <Route path="/refrigeracion" component={Refrigeracion} exact/>
              <Route path="/gasista" component={Gasista} exact/>
              <Route path="/refacciones" component={Refacciones} exact/>
              <Redirect to="/home" />
          </Switch> 
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;