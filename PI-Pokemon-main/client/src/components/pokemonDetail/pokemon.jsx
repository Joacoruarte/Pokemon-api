import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { pokemonDetail } from '../../actions' 
import { Link, useParams } from 'react-router-dom' 
import './pokemon.css'

export default function Pokemon() { 
  
  const dispatch = useDispatch() 
  const state = useSelector(state => state.pokemonDetail) 
  
  let { id } = useParams()
  useEffect(() => {   
    dispatch(pokemonDetail(id)) 
  }, [dispatch]) 


  return (  
    <> 
      <div className='div'> 
        <button className='button'><Link to={`/home`}>Go to home</Link></button>
      </div> 
      <div className='container' key={state.id}>  
          <div className='bk'> 
            <img src={state.img} alt='cargando..' id='pokeimg' />  
          </div>
        <div className='container1'>  
          <h1>{ state.name}</h1>  
          <h2>Numero de pokemon: {state.id}</h2>
          <span>{state.type}</span> 
          
          <ul className='list'> 
            <li>Hp: {state.hp}</li>
            <li>Attack: {state.attack}</li>
            <li>Defense: {state.defense}</li>
            <li>Speed: {state.speed}</li>
          </ul> 

          <ul className='list2'> 
            <li>Altura: {state.height} </li>
            <li>Peso: {state.weight}</li>      
          </ul>  
        </div>  
      </div>    
    </> 


  )
}
