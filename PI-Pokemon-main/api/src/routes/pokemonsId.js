const router = require('express').Router();
const { default: axios } = require('axios');

router.get('/:id' , async (req , res) => {    
    try{ 
        const { id } = req.params 

        if(id){ 
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)  
            // if(!data.id) return res.status(404).send('ID NOT FOUND') 
            const array = [] 
            array.push(data.data) 
            const detail = array.map(e=> { 
                return { 
                    name: e.name, 
                    id: e.id, 
                    weight: e.weight,  
                    height: e.height, 
                    hp: e.stats[0].base_stat, 
                    attack: e.stats[1].base_stat, 
                    defense: e.stats[2].base_stat, 
                    speed: e.stats[5].base_stat, 
                    type: e.types.map(e=> e.type.name),  
                    img: e.sprites.front_default
                }
            }) 
            return res.json(detail)
        }
            
        
    }
    catch(err){ 
        console.log(err)
    }


}); 

module.exports = router