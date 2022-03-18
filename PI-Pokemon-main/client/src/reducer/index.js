import { GET_POKEMONS , GET_DETAIL ,GET_TYPES , ORDER_PK , POKE_NAME , FILTER_TYPE , REFRESH_POKEMONS} from "../actions/types"; 

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
                    return {...state ,  allPokemons: az}  
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
                return {...state ,  allPokemons: za} 
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
                return {...state ,  allPokemons: low} 
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
                return {...state ,  allPokemons: hight}  
          } 
          if(payload === 'api'){ 
            let arr = [] 
            state.auxPokemons.map((e)=> { 
                if(typeof e.id === 'number'){ 
                   arr.push(e)
                } 
                return e 
            }) 
            return {...state , allPokemons: arr}
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
                    return {...state , allPokemons: state.auxPokemons }
                }
                let arr = []
                state.auxPokemons.map((e)=> { 
                    if(e.type[0] === payload || e.type[1] === payload){ 
                       return arr.push(e)
                    }  
                    return e
                }) 
                return {...state , allPokemons: arr }
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
            console.log(payload[0].name) 
            if(payload[0]){  
                let arr = []
                state.auxPokemons.map((e)=> {  
                    if(e.name.toLowerCase() === payload[0].name || e.name === payload[0].name){ 
                       return arr.push(e)
                    } 
                    return e
                }) 
                return { ...state , allPokemons: arr}
            }else if(payload[0] === null){ 
                return  { ...state , allPokemons: state.auxPokemons}
            }
            break;
        } 
        default: return state;
    }
}