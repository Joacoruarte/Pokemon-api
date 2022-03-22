import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { orders, pokemonDetail , deletePokemon, getAllPokemons } from '../../actions' 
import { Link, useHistory, useParams } from 'react-router-dom'  
import { FaTrash } from 'react-icons/fa'
import Spin from '../spin/spin2'  


export default function Pokemon() { 
  
  let { id } = useParams()
  const dispatch = useDispatch()   
  const history = useHistory()
  const state = useSelector(state => state.pokemonDetail) 
  
  useEffect(() => {    
      dispatch(pokemonDetail(id))  
      return function borrarDetalle(){ 
        dispatch(orders('vaciar'))
      }
  }, [id , dispatch]) 

  const deletePk = (id) => { 
    dispatch(deletePokemon(id)) 
    dispatch(getAllPokemons())  
    alert('se elimino tu pokemon') 
    setTimeout(() => {
      history.push('/home')
    }, 1500);
  }

    return ( 
      <> 
        {Object.keys(state).length === 0 ? <Spin/> :  
         <> 
         <div className='div'> 
           <button className='button'><Link to={`/home`}>Go to home</Link></button> 
           {typeof state.id === 'string' && <button onClick={()=> deletePk(id)} id='delete'><FaTrash/></button>}  
         </div> 
         <div className='container' key={id}>  
             <div className='bk'> 
               <img src={state.img} alt='cargando..' id='pokeimg' />  
             </div>
           <div className='container1'>  
             <h1>{ state.name}</h1>  
             <h2>Numero de pokemon: {state.id}</h2>
             <div className='tipo'> 
             {state.type && state.type.map(e => ( 
               <p key={e}>{e}</p>
             ))}
             </div>
             
             <ul className='list'> 
               <li>💗{state.hp}</li>
               <li>⚔ {state.attack}</li>
               <li>🛡 {state.defense}</li>
               <li>💨 {state.speed}</li>
             </ul> 
 
             <ul className='list2'> 
               <li>Altura:   {state.height} </li>
               <li>Peso:   {state.weight}</li>      
             </ul>  
           </div>  
         </div>           
       </>
        }
      </>
    )
}

