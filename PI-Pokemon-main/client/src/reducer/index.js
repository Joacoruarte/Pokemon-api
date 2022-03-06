import { GET_POKEMON } from "../actions"; 

const initialState = { 
    pokemonLoaded: [],
} 

export default function reducer(state = initialState, { type , payload}){ 
    switch(type){ 
        case GET_POKEMON:{ 
            return { ...state , pokemonLoaded: payload[0]} 
        }  
        default: return {...state};
    }
}