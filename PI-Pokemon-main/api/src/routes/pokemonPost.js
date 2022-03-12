const router = require('express').Router();  
const { Pokemon, Type } = require('../db')

router.post('/' , async (req , res) =>{  
    try{ 
        const { name , hp , attack , defense , speed,  height , weight , img , type } = req.body 
        const pokemon = await Pokemon.create({  
                name: name,
                hp: hp, 
                attack: attack, 
                defense: defense, 
                speed: speed, 
                height: height, 
                weight: weight, 
                img: img, 
        })      
        let typeDb = await Type.findAll({ 
            where: { 
                name: type
            }
        }) 
        await pokemon.addType(typeDb)   
        
        res.send("pokemon succes") 
    }catch(err){ 
        res.send(err)
    }
})

module.exports = router