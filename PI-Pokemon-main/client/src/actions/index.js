import axios from 'axios'
import {  
    ORDER_PK,  
    FILTER_TYPE,  
    POKE_NAME,  
    GET_POKEMONS,  
    GET_TYPES, 
    GET_DETAIL, 
    POST_POKEMON, 
    DELETE_POKEMON, 
    LOADING , 
    LOADING_FALSE} from './types' 

export function deletePokemon(id){  
    return async function(dispatch){ 
        await axios.post(`/pokemons/delete`, {id: id}) 
        dispatch({type: DELETE_POKEMON , payload: id })
    }
} 

export function setLoading(payload){ 
    return { type: LOADING_FALSE , payload}
}


export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`/pokemons`) 
        const payload = await response.data
        dispatch({type: GET_POKEMONS , payload })
    }
}

export function orders(payload){  
    return { type: ORDER_PK , payload }
}

export function filterType(payload){  
    return { type: FILTER_TYPE , payload }
}

export function pokemonDetail(id){ 
    return async function(dispatch){ 
        const response = await axios.get(`/pokemons/${id}`) 
        const payload = await response.data
        dispatch({type: GET_DETAIL , payload})
    }
} 


export function pokemonName(name){ 
    return async function(dispatch) { 
        try{ 
            dispatch({type: LOADING}) 
            const response = await axios.get(`/pokemons?name=${name}`) 
            const payload = await response.data  
            dispatch({type: POKE_NAME , payload})            
        }catch{  
           alert('Tienes que ingresar un nombre y que sea valido')
        }  

    }
}


export function getTypes(){ 
    return async function(dispatch){ 
        const response = await axios.get(`/types`) 
        const payload = await response.data
        dispatch({type: GET_TYPES , payload})
    }
} 

export function postPokemon(pokemon){ 
    return async function(dispatch){ 
        await axios.post(`/pokemons` , pokemon) 
        dispatch({type: POST_POKEMON })
    }
} 
