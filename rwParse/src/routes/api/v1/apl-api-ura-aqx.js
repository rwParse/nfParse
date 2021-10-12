const express = require('express');
const routes = express.Router();

const AntecipacaoParcelas = require('../../../ControllerFinanceira/AntecipacaoParcelas/AntecipacaoParcelas');
const AutenticacaoPositiva = require('../../../ControllerFinanceira/AutenticacaoPositiva/AutenticacaoPositiva');
const BloquearCliente = require('../../../ControllerFinanceira/BloquearCliente/BloquearCliente');
const Boletos = require('../../../ControllerFinanceira/Boletos/index');
const BuscaDadosCpf = require('../../../ControllerFinanceira/BuscaDadosCpf/BuscaDadosCpf');
const Carnes = require('../../../ControllerFinanceira/Carnes/index');
const Cartao = require('../../../ControllerFinanceira/Cartao/index');
const CelularCliente = require('../../../ControllerFinanceira/CelularCliente/CelularCliente');
const ConsultaAni = require('../../../ControllerFinanceira/ConsultaAni/index');
const Contratos = require('../../../ControllerFinanceira/Contratos/index');
const Endereco = require('../../../ControllerFinanceira/Endereco/Endereco');
const EnvioSMS = require('../../../ControllerFinanceira/EnvioSMS/EnvioSms');
const Gravames = require('../../../ControllerFinanceira/Gravames/Gravames');
const IdentificaLojista = require('../../../ControllerFinanceira/IdentificaLojista/IdentificaLojista');
const LinhaDigitavel = require('../../../ControllerFinanceira/LinhaDigitavel/LinhaDigitavel');
const Portabilidade = require('../../../ControllerFinanceira/Portabilidade/Portabilidade');
const LinhaDigitavelEmail = require('../../../ControllerFinanceira/LinhaDigitavel/LinhaPorEmail');
const ReembolsoCobranca = require('../../../ControllerFinanceira/ReembolsoCobranca/ReembolsoCobranca');
const SaldoDevedorDia = require('../../../ControllerFinanceira/SaldoDevedorDia/SaldoDevedorDia');
const SaldoDevedorDiaV2 = require('../../../ControllerFinanceira/SaldoDevedorDia/SaldoDevedorDiaV2');
const Correspondente = require('../../../ControllerFinanceira/Correspondente/Correspondente')

const StatusContrato = require('../../../ControllerFinanceira/StatusContrato/StatusContrato');
const StatusProposta = require('../../../ControllerFinanceira/StatusProposta/StatusProposta');
const Token = require('../../../ControllerFinanceira/Token/Token');

const Parcelas = require('../../../ControllerFinanceira/Parcelas/index');


routes
.post('/api/v1/scd/AntecipacaoParcelas', 
AntecipacaoParcelas.AntecipacaoParcelas);

routes
.get('/api/v1/scd/Parcelas/:idContrato/Saldo', Parcelas.saldoParcela);

routes
.get('/api/v1/scd/AutenticacaoPositiva/:idContrato', 
AutenticacaoPositiva.AutenticacaoPositiva);
routes
.post('/api/v1/scd/BloquearCliente', BloquearCliente.BloquearCliente);
routes
.get('/api/v1/scd/Boletos/:idContrato', Boletos.BoletoDownload.BoletoDownload);
routes
.post('/api/v1/scd/Boletos/Email', Boletos.BoletoEmail.BoletoEmail);
routes
.post('/api/v1/scd/AutenticacaoPositiva', AutenticacaoPositiva.AutenticacaoPositiva);
routes
.get('/api/v2/epf/BuscaDadosCpf/:idCliente', BuscaDadosCpf.BuscaDadosCpf);
routes
.get('/api/v1/scd/Carnes/:idContrato', Carnes.Carnes.Carnes);
routes
.get('/api/v1/scd/Carnes/:idContrato/Download', Carnes.CarnesDownload.CarnesDownload);
routes
.post('/api/v1/scd/Carnes/Email', Carnes.CarnesEmail.CarnesEmail);

routes
.get('/api/v1/epf/Cartao/:idCliente/Status', Cartao.CartaoEpfStatus.CartaoEpfStatus);
routes
.get('/api/v1/epf/Cartao/:idCliente/Limite', Cartao.CartaoEpfLimite.CartaoEpfLimite);

routes
.get('/api/v1/scd/CelularCliente/:idContrato', CelularCliente.CelularCliente);

routes
.get('/api/v1/epf/Correspondente/:idContrato', Correspondente.correspondente);

 routes
 .get('/api/v1/scd/ConsultaAni/:numTelefone', 
 ConsultaAni.ScdConsultaAni.ScdConsultaAni);
 routes
 .get('/api/v1/epf/ConsultaAni/:numTelefone', 
 ConsultaAni.EpfConsultaAni.EpfConsultaAni);
 routes
 .get('/api/v1/scd/Contratos/:cpfCnpj', 
 Contratos.ScdContratosDocumento.ScdContratosDocumento);
 routes.get('/api/v1/epf/Contratos/:idContrato/Extrato/Download',  Contratos.EpfExtrato.extratoEpf);
 routes
 .get('/api/v1/scd/Contratos/:cpfCnpj/Detalhado', 
 Contratos.ScdContratosDocumentoCompleto.ScdContratosDocumentoCompleto);
 routes
 .get('/api/v1/solar/Contratos/:cpfCnpj', 
 Contratos.SolarContratosDocumento.SolarContratosDocumento);
 routes
 .get('/api/v1/solar/Contratos/:idContrato/Detalhes', 
 Contratos.SolarContratosDetalhes.SolarContratosDetalhes);

 routes
 .get('/api/v1/scd/Contratos/:cpfCnpj/:idContrato', 
 Contratos.ScdContratosDocumentoEidContrato.ScdContratosDocumentoEidContrato);
 routes
 .get('/api/v1/scd/Contratos/:idProposta/:idCliente/CopiaContrato/Download', 
 Contratos.ScdContratosDownload.ScdContratosDownload);
 routes
 .post('/api/v1/scd/Contratos/CopiaContrato/Email', 
 Contratos.ScdContratosDocumentoEmail.ScdContratosDocumentoEmail);
 routes
 .get('/api/v2/epf/Contratos/:idCliente', 
 Contratos.EpfContratosIdCliente.EpfContratosIdCliente);
 routes
 .get('/api/v1/epf/Contratos/:idCliente/:idContrato', 
 Contratos.EpfContratoIdClienteIdContrato.EpfContratoIdClienteIdContrato);
 routes
 .get('/api/v1/epf/Contratos/:idContrato/CopiaContrato/Download', 
 Contratos.EpfContratosDownload.EpfContratosDownload);
 routes
 .post('/api/v1/epf/Contratos/CopiaContrato/Email', 
 Contratos.EpfContratosDocumentoEmail.EpfContratosDocumentoEmail);
 routes
 .get('/api/v1/epf/Endereco/:cep', Endereco.Endereco);
 routes
 .post('/api/v1/scd/EnvioSMS', EnvioSMS.EnvioSMS);
 routes
 .get('/api/v1/scd/Gravames/:idContrato', Gravames.Gravames);
 routes
 .get('/api/v1/scd/IdentificaLojista/:cpfCnpj', IdentificaLojista.IdentificaLojista);
 routes
 .post('/api/v2/scd/LinhaDigitavel', LinhaDigitavel.LinhaDigitavel);
 routes
 .get('/api/v1/epf/Portabilidade/:idCliente/:idContrato/Status', Portabilidade.Portabilidade);
 routes
 .post('/api/v1/scd/LinhaDigitavel/Email', LinhaDigitavelEmail.LinhaDigitavelEmail);
 routes
 .get('/api/v1/epf/ReembolsoCobranca/:idContrato', ReembolsoCobranca.ReembolsoCobranca);
 routes
 .post('/api/v1/scd/SaldoDevedorDia', SaldoDevedorDia.SaldoDevedorDia);
 routes
 .post('/api/v2/scd/SaldoDevedorDia', SaldoDevedorDiaV2.SaldoDevedorDiaV2);
 routes
 .get('/api/v1/epf/StatusContrato/:idCliente', StatusContrato.StatusContrato);
 routes
 .get('/api/v1/epf/StatusProposta/:idCliente', StatusProposta.StatusProposta);
 routes
 .post('/api/v1/Token', Token.Token);

 module.exports = routes;
  

