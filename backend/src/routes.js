const express = require('express');

const routes = express.Routes();

routes.get('/', (request, response) => {
  return response.json({
    message: 'Hello world'
  });
});

module.exports = routes;