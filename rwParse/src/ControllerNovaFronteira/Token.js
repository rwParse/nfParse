const request = require('request')
const qs = require('qs');
const config = require('../config/index');

token =  (req, res) => {

  const form = {
    client_id: req.headers['client_id'],
    grant_type: req.headers['grant_type'],
    client_secret: req.headers['client_secret']
  }
  console.log(form)
request.post(
  {
    url: `${config.cht.baseUrl}/token`,
    form: {
      client_id: req.headers['client_id'],
      grant_type: req.headers['grant_type'],
      client_secret: req.headers['client_secret']
    }
  },
  (err, response, body) => {
    return res.send(response)
  }
);

}


module.exports = {
  token
}