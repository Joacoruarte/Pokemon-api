import { GET_POKEMONS , GET_DETAIL ,GET_TYPES , FILT_AZ , POKE_NAME } from "../actions"; 

const initialState = {  
    allPokemons: [], 
    auxPokemons: [],
    pokemonTypes: [],
    pokemonDetail: {}
} 

export default function reducer(state = initialState, { type , payload}){ 
    switch(type){ 
        case GET_POKEMONS:{ 
            return { ...state , allPokemons: payload, auxPokemons: payload}
        }  
        case FILT_AZ:{         
            if(payload === 'az'){ 
               const az = state.allPokemons.sort((a,b) => {  
                            if(a.name > b.name){ 
                                return 1
                            } 
                            if (a.name < b.name) {
                                return -1;
                            } 
                            return 0                     
                    })                  
                    return {...state ,  allPokemons: az}  
                }  
            if(payload === 'za'){ 
                const za = state.allPokemons.sort((a,b) => {  
                        if(a.name < b.name){ 
                            return 1
                        } 
                        if (a.name > b.name) {
                            return -1;
                        } 
                        return 0                     
                })                  
                return {...state ,  allPokemons: za} 
          }        
            if(payload === 'low'){ 
                const low = state.allPokemons.filter(e => e.attack < 60)         
                return {...state ,  allPokemons: low} 
          }        
            if(payload === 'hight'){ 
                const low = state.allPokemons.filter(e => e.attack > 60)         
                return {...state ,  allPokemons: low} 
          } 
          break;        
        }
        case GET_TYPES:   { 
            return { ...state , pokemonTypes: payload}
        } 

        case GET_DETAIL:  { 
            return { ...state,  
                pokemonDetail: { 
                                 name: payload.name, 
                                 id: payload.id , 
                                 weight: payload.weight, 
                                 height: payload.height, 
                                 hp: payload.stats[0].base_stat, 
                                 attack: payload.stats[1].base_stat, 
                                 defense: payload.stats[2].base_stat, 
                                 speed: payload.stats[5].base_stat, 
                                 type: payload.types.map(e=> e.type.name),  
                                 img: payload.sprites.other.home.front_shiny
                               }}
        } 
        case POKE_NAME: {  
            console.log(payload[0].name) 
            if(payload){ 
                const onePk = state.allPokemons.filter(e => e.id === payload[0].id) 
                console.log(onePk)
                return { ...state , allPokemons: onePk}
            } 
            break;
        } 
        default: return state;
    }
}