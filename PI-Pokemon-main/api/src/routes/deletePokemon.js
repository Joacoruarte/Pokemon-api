const router = require('express').Router();  
const { Pokemon } = require('../db') 

router.post('/' , async (req , res) =>{  
    try{ 
        const { id } = req.body
        return res.json(await Pokemon.destroy({   
            where: {
                id: id       
            } 
        }))
    }catch(err){ 
        res.send(err)
    }
}) 

module.exports = router