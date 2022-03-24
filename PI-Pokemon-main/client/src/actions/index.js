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
    LOADING } from './types' 

export function deletePokemon(id){  
    return async function(dispatch){ 
        await axios.post(`/pokemons/delete`, {id: id}) 
        dispatch({type: DELETE_POKEMON , payload: id })
    }
}


export function getAllPokemons(){ 
    return async function(dispatch){ 
        const response =  await axios.get(`/pokemons`) 
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
        const response = await axios.get(`/pokemons/${id}`) 
        const payload = await response.data
        dispatch({type: GET_DETAIL , payload})
    }
} 


export function pokemonName(name){ 
    name = name[0].toUpperCase() + name.slice(1) 
    return async function(dispatch) { 
        try{ 
            dispatch({type: LOADING}) 
            let arr = [] 
            const response = await axios.get(`/pokemons?name=${name}`) 
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
