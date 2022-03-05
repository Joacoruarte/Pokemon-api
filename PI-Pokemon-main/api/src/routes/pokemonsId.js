const router = require('express').Router(); 
const utils = require('../utils')

router.get('/:id' , async (req , res) => {    
    try{ 
        const { id } = req.params 
        if(id){       
            const data = await utils.dbPokemon()  
            let detail = data.find(e => e.id === Number(id) || e.id === id) 
            if(!detail) return res.send('404 NOT FOUND')
            res.json(detail)
        }       
    }
    catch(err){ 
        console.log(err)
    }
}); 

module.exports = router