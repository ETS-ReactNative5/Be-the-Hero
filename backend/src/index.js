const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/** 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */ 


/**
  * Tipos de Parametros:
  * 
  * Query: Parâmetros nomeados enviados na rota apóe '?' (filtros: paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*).where() 
 */


app.listen(3333);
