const express = require('express');
const routes = express.Router();

const gatewayCht  = require('../../../ControllerGateWay/index');

routes
.post('/token', gatewayCht.token.token);

routes
.post('/notificacoes/v1/whatsapp', gatewayCht.Notifications.Notifications);

module.exports = routes;