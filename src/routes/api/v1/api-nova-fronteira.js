const express = require('express');
const routes = express.Router();

const novaFronteira = require('../../../ControllerNovaFronteira/index');

routes.get('/carteiras', novaFronteira.Carteira.Carteira)

routes.post('/messages', novaFronteira.Message.Message)

module.exports = routes;