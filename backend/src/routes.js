const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const connection = require('./database/connection');
const routes = express.Router();

//
// ─── ROTAS SESSION ──────────────────────────────────────────────────────────────
//
routes.post('/sessions', sessionController.create );
    
//
// ─── ROTAS ONGS ─────────────────────────────────────────────────────────────────
//
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
//
// ─── ROTAS INCIDENTS ────────────────────────────────────────────────────────────
//
routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);
//
// ─── ROTAS PROFILE ──────────────────────────────────────────────────────────────
//
routes.get('/profile', profileController.index);
    

/*
* temos que deixar as rotas disponíveis para a aplicação possa utilizar
* então temos que exportar utilizando o module.export
* que é utilizado para exportar uma variável dentro de um arquivo
*/
module.exports = routes;