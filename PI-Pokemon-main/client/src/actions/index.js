
export const GET_POKEMON = 'GET_POKEMON';


export function getPokemon(pokemon){ 
    return async function(dispatch){ 
        const response = await fetch(`http://localhost:3001/pokemons?name=${pokemon}`) 
        const payload = await response.json()
        dispatch({type: 'GET_POKEMON' , payload})
    }
}