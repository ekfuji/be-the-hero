import React, { useState } from 'react';
import "./global.css"
import Routes from './routes'
//Um componente no react é uma função que retorna um elemento html
//Quando fazemos alteração do elemento e ele é automaticamente carregado no 
//navegador chamamos isso de - live reload 


function App() {

  return (
    <Routes></Routes>
   
  );
}

export default App;
 //quando utilizamos o useState ele nos retorna um array
  //Array [valor, funcaoDeAtualizacaoDoValor]
   //Quando um elemento html é escrito dentro do javascript
    //a gente chama ele de JSX (Javascript XML)