const router = require('express').Router();  
const { Pokemon } = require('../db')

router.post('/' , async (req , res) =>{  
    try{ 
        const {id , name , weight , height , hp , attack,  defense , speed } = req.body 
        await Pokemon.findOrCreate({ 
            where: { 
                id,  
                name,
                weight, 
                height, 
                hp, 
                attack, 
                defense, 
                speed, 
            } 
        }) 
        // const allPk = await Pokemon.findAll() 
        // res.json(allPk)
    }catch(err){ 
        console.log(err)
    }

})

module.exports = router