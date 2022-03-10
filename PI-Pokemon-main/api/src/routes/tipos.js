const router = require('express').Router();
const utils = require('../utils')
const { Type } = require('../db');



router.get('/' , async (req , res) => {  
    try{ 
        const type = await utils.types() 
        const tipo = type.forEach(async(e) => { 
            await Type.findOrCreate({ 
                where: {
                    id: e.id, 
                    name: e.name,
                }
            })
    })  
    const allData = await Type.findAll() 
    res.json(allData.map(e => e.toJSON()))
    } 
    catch(err){ 
        console.log(err)
    }
 
}); 

module.exports = router