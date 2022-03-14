import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { orders, pokemonDetail } from '../../actions' 
import { Link, useParams } from 'react-router-dom' 
import Spin from '../spin/spin'

export default function Pokemon() { 
  
  const dispatch = useDispatch() 
  const state = useSelector(state => state.pokemonDetail) 
  
  let { id } = useParams()
  useEffect(() => {   
    dispatch(pokemonDetail(id)) 
  }, [dispatch]) 


  return (  
    <> 
      {Object.keys(state).length === 0 ? <Spin/> : 
      <> 
        <div className='div'> 
          <button className='button' onClick={() => dispatch(orders('vaciar'))}><Link to={`/home`}>Go to home</Link></button>
        </div> 
        <div className='container' key={state.id}>  
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
              <li>💗 {state.hp}</li>
              <li>⚒ {state.attack}</li>
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
