
const axios = require('axios')
const config = require('../config/index');

Carteira =  (req, res) => {

const params = new URLSearchParams()
params.append('username', req.headers['username'])
params.append('password', req.headers['password'])
params.append('URL', req.headers['url'])
params.append('format', req.headers['format'])


const configHeaders = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
axios.post(`${config.novafronteira.baseUrl}`, params, {timeout: 1000 * 4}, configHeaders)
  .then((result) => {
    const jsonText = JSON.stringify(result.data);
    const responseObject = JSON.parse(jsonText);
    const patrimonio = parseInt(responseObject.resposta['tab-p0'].linha.saldo_bruto_da_carteira).toFixed(2)
    res.json({patrimonio});
  })
  .catch((err) => {
    res.status(err.response.status).json({error: err.response.data})
  })

}


module.exports = {
  Carteira
}