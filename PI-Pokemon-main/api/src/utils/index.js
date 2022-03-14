const { Pokemon, Type } = require('../db');

const axios = require('axios').default; 


async function dbPokemon(){ 
    try{ 
       const data = await pokemonsData()

       const dbPokemon = await Pokemon.findAll({ 
           include:{ 
               model: Type,  
               attributes: ["name"] ,  
               through: {  
                   attributes: [], 
                } 
            } 
        })     
       let jss = dbPokemon.map(e => e.toJSON()) 
       jss = jss.map(e=> {  
            return { 
                id: e.id, 
                name: (e.name[0].toUpperCase() + e.name.slice(1)), 
                hp: e.hp, 
                attack: e.attack, 
                defense: e.defense, 
                speed: e.speed, 
                height: e.height, 
                weight: e.weight, 
                img: e.img, 
                type: e.types.map(e=> e.name)
        }
    }) 
    jss.forEach(e=> data.push(e))
    return data  
    }catch(err){ 
        console.log(err)
    }

}

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
            name: (e.name[0].toUpperCase() + e.name.slice(1)), 
            id: e.id, 
            weight: e.weight,  
            height: e.height, 
            hp: e.stats[0].base_stat, 
            attack: e.stats[1].base_stat, 
            defense: e.stats[2].base_stat, 
            speed: e.stats[5].base_stat, 
            type: e.types.map(e=> e.type.name),  
            img: e.sprites.other.home.front_shiny
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

module.exports = { pokemonsData , types , dbPokemon }



