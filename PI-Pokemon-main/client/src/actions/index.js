import axios from 'axios'

export const FILT_AZ = 'FILT_AZ'; 
export const POKE_NAME = 'POKE_NAME';  
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
export const GET_DETAIL = 'GET_DETAIL' 
export const POST_POKEMON = 'POST_POKEMON'

export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`http://localhost:3001/pokemons`) 
        const payload = await response.data
        dispatch({type: GET_POKEMONS , payload })
    }
}

export function filterAZ(payload){  
    console.log(payload)
    return async function(dispatch){  
        dispatch({ 
            type: FILT_AZ ,  
            payload 
         })
    }
}

export function pokemonDetail(id){ 
    return async function(dispatch){ 
        const response = await axios.get(` https://pokeapi.co/api/v2/pokemon/${id}`) 
        const payload = await response.data
        dispatch({type: GET_DETAIL , payload})
    }
}

export function pokemonName(name){  
    console.log(name)
    return async function(dispatch){  
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`) 
        const payload = await response.data 
        dispatch({type: POKE_NAME , payload: payload.length > 0 ? payload : alert('pokemon no encontrado')})
    }
}


export function getTypes(){ 
    return async function(dispatch){ 
        const response = await axios.get(`http://localhost:3001/types`) 
        const payload = await response.data
        dispatch({type: GET_TYPES , payload})
    }
} 

export function refreshPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`http://localhost:3001/pokemons`) 
        const payload = await response.data
        dispatch({type: GET_POKEMONS , payload })
    }
}

export function postPokemon(){ 
    return async function(dispatch){ 
        const response = await axios.post(`http://localhost:3001/pokemons`) 
        const payload = await response.data
        dispatch({type: POST_POKEMON , payload})
    }
} 
