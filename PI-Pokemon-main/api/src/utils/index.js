const axios = require('axios').default; 



async function pokemonsData(){  
        const pk20 = await axios.get('https://pokeapi.co/api/v2/pokemon') 
        const pk40 = await axios.get(pk20.data.next) 
        const pkTotal = pk20.data.results.concat(pk40.data.results)

        let result = pkTotal.map(async(e) => { 
            return await axios.get(e.url) 
        })  
        let promise = (await Promise.all(result))
        let pk = promise.map(e => e.data)
    
        const allPokemons = pk.map(e => { 
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
          
        return allPokemons 
    } 

async function types(){ 
        const types = await axios.get('https://pokeapi.co/api/v2/type') 
        const type =  await types.data.results.map(e => e)  
        
        let result = type.map(async(e) => { 
            return await axios.get(e.url)
        })  

        let promise = (await Promise.all(result)) 
        let typeData = promise.map(e => e.data) 

        const allTypes = typeData.map(e => { 
        return { 
        id: e.id, 
        name: e.name, 
        }   
      })    
        return allTypes
    }

module.exports = { pokemonsData , types }


