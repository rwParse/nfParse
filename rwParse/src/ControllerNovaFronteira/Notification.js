
const axios = require('axios')
const config = require('../config/index');

Carteira = async (req, res) => {

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

  const configHeadersSaleForce = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': req.headers['token'] 
    }
  }
  let patrimonioId = req.headers['idpatrimonio']
  console.log(configHeadersSaleForce, patrimonioId);

  const data = await (await axios.post(`${config.novafronteira.baseUrl}`, params, { timeout: 2000 * 4 }, configHeaders)).data


  if (data) {

    const patrimonio = parseInt(data.resposta['tab-p0'].linha.saldo_bruto_da_carteira).toFixed(2)

    if(patrimonio !== undefined) {

      const updatePatrimonio = await (await axios.patch(`https://novafronteira.my.salesforce.com/services/data/v52.0/sobjects/patrimonio__c/${patrimonioId}`,{
        "Valor_de_mercado__c":  patrimonio
      }, configHeadersSaleForce)).data;
  
      console.log(patrimonio, updatePatrimonio)
      
      res.json({ patrimonio,updatePatrimonio });
    }

    res.status(404).json({message:'Não foi possivel atualizar'});
  } else {
    res.status(404).json({ error: 'Erro ao carregar os dados!' })
  }
}

module.exports = {
  Carteira
}