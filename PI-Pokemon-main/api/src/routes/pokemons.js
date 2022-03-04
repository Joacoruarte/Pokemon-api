const router = require('express').Router();
const utils = require('../utils')


router.get('/' , async (req , res) => {   
  try{ 
    const {name} = req.query 
    const allData = await utils.pokemonsData()     
    if(name){ 
      let dataName = allData.filter(e => e.name === name) 
      return res.json(dataName)
    }   
    res.json(allData) 
  }catch(err){ 
    console.log(err)
  }

});

module.exports = router
