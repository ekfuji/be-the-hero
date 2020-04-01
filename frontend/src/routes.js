import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes(){
    return (
          <BrowserRouter>
          <Switch>
              {/* NOTE - O Switch vai garantir que uma rota seja executada por momento
              mesmo que o caminho delas for semelhante ele nunca irá chamar mais de uma rota */}
              <Route path="/" exact component={Logon}/>
              <Route path="/register" component={Register}/>
              {/* NOTE - Se eu colocar na barra de endereço /register ele redirecionará para o Logon
              pois o react-router-dom não verifica se a rota na url é igual e sim se como ela inicia
              então para resolver este problema utilizamos a propriedade exact */}
              <Route path="/profile" component={Profile}/>
              <Route path="/incidents/new" component={NewIncident}/>

          </Switch>
          </BrowserRouter>
    );
}