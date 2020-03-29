const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors);
/**
CORS
npm i cors
o cors vai determinar quem poderá acessar a aplicação
se for usar o cors e ambiente de produção utilizamos o origin (determina o endereço)
que podera utilizar a nossa aplicação
app.use(cors({
 origin: 'http://meuapp.com'
}));
 */
app.use(express.json());
//Digo para o express que o body usará o formato json nas requisições
app.use(routes);


app.listen(3333);
//npx serve para executar um pacote
//npm para instalar um pacote


/* 
* Rota / Recurso
* Métodos HTTP 
* GET: Buscar/Listar uma informação do back-end 
* POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação do back-end
*/

/*
* Tipo de parâmetros
* Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, paginação ...)
* Route Params:  Parâmetros utilizados para identificar recursos
* Request Body:  Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* Nodemon é um pacote que serve para não termos que ficar reiniciando toda vez 
* o servidor para visualizar uma alteração
* é instalado somente no modo de desenvolvimento e executamos um script que demos o nome de start
 */

 /*
 * Bancos de dados
 * SQL (relacionais): MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL (Não relacionais): MongoDB ...
*/

/*
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()     
* O Query Builder possibilita a utilização de diferentes tipos de bancos SQL usando o mesmo tipo
* de query. A ferramenta que utilizaremos é o KNEX.js
* npm i knex
* npm i sqlite3
 */
 
/**
Migrations é uma forma de criar as tabelas e manter um histórico dessas tabelas
*/

