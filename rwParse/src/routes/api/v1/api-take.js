const express = require('express');
const routes = express.Router();

const deletSchedule = require('../../../Controllers/Delete/ControllerDelete');
const ControllerConsultaResource = require('../../../Controllers/Resources/ControllerConsultaResource');


routes.get('/delete', deletSchedule.scheduled);
routes.get('/resource/:id', ControllerConsultaResource.getResource);
routes.post('/protocolos', ControllerConsultaResource.criarProtocolo)
routes.post('/ocorrencias', ControllerConsultaResource.criarOcorrencia)
routes.post('/logs', ControllerConsultaResource.logsBlip)
module.exports = routes;