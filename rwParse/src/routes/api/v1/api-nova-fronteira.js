const express = require('express');
const routes = express.Router();

const novaFronteira = require('../../../ControllerNovaFronteira/index');

routes.get('/carteiras', novaFronteira.Carteira.Carteira)

module.exports = routes;