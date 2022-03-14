import axios from 'axios'

export const ORDER_PK = 'ORDER_PK'; 
export const FILTER_TYPE = 'FILTER_TYPE'; 
export const POKE_NAME = 'POKE_NAME';  
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_TYPES = 'GET_TYPES'
export const GET_DETAIL = 'GET_DETAIL' 
export const POST_POKEMON = 'POST_POKEMON' 
export const REFRESH_POKEMONS = 'REFRESH_POKEMONS'

export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`http://localhost:3001/pokemons`) 
        const payload = await response.data
        dispatch({type: GET_POKEMONS , payload })
    }
}

export function orders(payload){  
    console.log(payload)
    return async function(dispatch){  
        dispatch({ 
            type: ORDER_PK ,  
            payload 
         })
    }
}
export function filterType(payload){  
    console.log(payload)
    return async function(dispatch){  
        dispatch({ 
            type: FILTER_TYPE ,  
            payload 
         })
    }
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
    console.log(name)
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
    return async function(dispatch){ 
        // const response =  await axios.get(`http://localhost:3001/pokemons`) 
        // const payload = await response.data
        dispatch({type: REFRESH_POKEMONS , payload })
    }
}

export function postPokemon(pokemon){ 
    return async function(dispatch){ 
        const response = await axios.post(`http://localhost:3001/pokemons` , pokemon) 
        dispatch({type: POST_POKEMON })
    }
} 
