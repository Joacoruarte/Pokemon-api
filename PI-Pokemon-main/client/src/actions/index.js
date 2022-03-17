import axios from 'axios'
import {  
    ORDER_PK,  
    FILTER_TYPE,  
    POKE_NAME,  
    GET_POKEMONS,  
    GET_TYPES, 
    GET_DETAIL, 
    POST_POKEMON,  
    REFRESH_POKEMONS} from './types' 


export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`http://localhost:3001/pokemons`) 
        const payload = await response.data
        dispatch({type: GET_POKEMONS , payload })
    }
}

export function orders(payload){  
    console.log(payload)
    return { type: ORDER_PK , payload }
}

export function filterType(payload){  
    return { type: FILTER_TYPE , payload }
}

export function pokemonDetail(id){ 
    return async function(dispatch){ 
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`) 
        const payload = await response.data
        dispatch({type: GET_DETAIL , payload})
    }
} 


export function pokemonName(name){ 
    name = name[0].toUpperCase() + name.slice(1) 
    return async function(dispatch){ 
        try{ 
            let arr = [] 
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`) 
            const payload = await response.data  
            arr.push(payload)
            console.log(arr)
            dispatch({type: POKE_NAME , payload: arr})            
        }catch{  
           alert('Tienes que ingresar un nombre y que sea valido')
        }  

    }
}


export function getTypes(){ 
    return async function(dispatch){ 
        const response = await axios.get(`http://localhost:3001/types`) 
        const payload = await response.data
        dispatch({type: GET_TYPES , payload})
    }
} 

export function refreshPokemons(payload){  
    return {type: REFRESH_POKEMONS , payload }
}

export function postPokemon(pokemon){ 
    return async function(dispatch){ 
        await axios.post(`http://localhost:3001/pokemons` , pokemon) 
        dispatch({type: POST_POKEMON })
    }
} 
