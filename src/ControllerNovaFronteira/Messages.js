Message =  (req, res) => {



    const jsonText = JSON.stringify(req.body);
    const responseObject = JSON.parse(jsonText);

    console.log(responseObject)

    res.json(responseObject);
 

}


module.exports = {
  Message
}