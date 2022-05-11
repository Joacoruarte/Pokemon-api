const router = require('express').Router();
const utils = require('../utils')


router.get('/' , async (req , res) => {   
  try{ 
    const {name} = req.query      
    const allData = await utils.dbPokemon() 
    if(name){ 
      let dataName = allData.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
      if(!dataName) return res.json(null) 
      return res.json(dataName)
    }    
    return res.json(allData)
  }catch(err){ 
    console.log(err)
  }

});

module.exports = router
