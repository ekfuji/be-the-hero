import React from 'react';
import ReactDOM from 'react-dom';
//Integração do react com a DOM(arvore de elementos html)

import App from './App';
//Geralmente os componentes do react tem a primeira letra maiúscula

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);


