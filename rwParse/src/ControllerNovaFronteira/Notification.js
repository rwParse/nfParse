
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
 console.log(params.values())
axios.post(`${config.novafronteira.baseUrl}`, params, configHeaders)
  .then((result) => {
    const jsonText = JSON.stringify(result.data);
    const responseObject = JSON.parse(jsonText);
    res.json(responseObject);
  })
  .catch((err) => {
    res.status(err.response.status).json({error: err.response.data})
  })

}


module.exports = {
  Carteira
}