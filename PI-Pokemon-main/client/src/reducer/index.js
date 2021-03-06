import { GET_POKEMONS , GET_DETAIL ,GET_TYPES , ORDER_PK , POKE_NAME , DELETE_POKEMON , FILTER_TYPE , LOADING , LOADING_FALSE} from "../actions/types"; 

const initialState = {  
    allPokemons: [], 
    auxPokemons: [],
    pokemonTypes: [], 
    loading: false,
    pokemonDetail: {}
} 

export default function reducer(state = initialState, { type , payload}){ 
    switch(type){ 
        case GET_POKEMONS:{ 
            return { ...state , allPokemons: payload, auxPokemons: payload}
        }  
        case ORDER_PK:{         
            if(payload === 'az'){  
               const az = state.auxPokemons.sort((a,b) => {  
                            if(a.name > b.name){ 
                                return 1
                            } 
                            if (a.name < b.name) {
                                return -1;
                            } 
                            return 0                     
                    })             
                    return {...state ,  allPokemons: az , loading:false}  
                }  
            if(payload === 'za'){ 
                const za = state.auxPokemons.sort((a,b) => {  
                        if(a.name < b.name){ 
                            return 1
                        } 
                        if (a.name > b.name) {
                            return -1;
                        } 
                        return 0                     
                })                  
                return {...state ,  allPokemons: za , loading:false} 
          }        
            if(payload === 'low'){ 
                const low = state.auxPokemons.sort((a,b) => {  
                    if(a.attack > b.attack){ 
                        return 1
                    } 
                    if (a.attack < b.attack) {
                        return -1;
                    } 
                    return 0  
                })          
                return {...state ,  allPokemons: low , loading:false} 
          }        
            if(payload === 'hight'){ 
                const hight = state.auxPokemons.sort((a,b) => {  
                    if(a.attack < b.attack){ 
                        return 1
                    } 
                    if (a.attack > b.attack) {
                        return -1;
                    } 
                    return 0  
                })             
                return {...state ,  allPokemons: hight , loading:false}  
          } 
          if(payload === 'api'){ 
            let arr = [] 
            state.auxPokemons.map((e)=> { 
                if(typeof e.id === 'number'){ 
                   arr.push(e)
                } 
                return e 
            }) 
            return {...state , allPokemons: arr , loading:false}
          }
          if(payload === 'db'){ 
            let arr2 = [] 
            state.auxPokemons.map(e=> { 
                if(typeof e.id === 'string'){ 
                  arr2.push(e)
              } 
              return e
            })
            
            return {...state , allPokemons: arr2 }
          } 
          if(payload === 'vaciar'){ 
              state.pokemonDetail = {} 
              return {...state }
          }
          break;        
        } 
        case FILTER_TYPE:{ 
            if(payload){ 
                if(payload === 'all'){ 
                    return {...state , allPokemons: state.auxPokemons , loading:false}
                }
                let arr = []
                state.auxPokemons.map((e)=> { 
                    if(e.type[0] === payload || e.type[1] === payload){ 
                       return arr.push(e)
                    }  
                    return e
                }) 
                return {...state , allPokemons: arr , loading:false }
            }  
          break;        
        }
        case GET_TYPES:   { 
            return { ...state , pokemonTypes: payload}
        } 

        case GET_DETAIL:  { 
            return { ...state, pokemonDetail: payload }
        } 
        case POKE_NAME: {  
            if(payload){  
                return { ...state , allPokemons: payload , loading: false}
            }else if(payload[0] === null){ 
                return  { ...state , allPokemons: state.auxPokemons , loading: false}
            }
            break;
        } 
        case DELETE_POKEMON: {
            return { ...state ,  allPokemons: state.allPokemons.filter(e=> e.id === payload)}
        }  
        case LOADING: { 
            return { ...state , loading: true}
        } 
        case LOADING_FALSE :{  
            if(payload === 'loading'){ 
                return { ...state , loading:false}
            } 
            break
        }
        default: return state;
    }
}