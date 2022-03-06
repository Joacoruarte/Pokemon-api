import React from 'react'
import { useDispatch } from 'react-redux'; 
import { getPokemon } from '../../actions';

export default function Home() { 

  const [name , setName] = React.useState("");
  const dispatch = useDispatch()

  const handleOnChange = (event) => { 
    setName(event.target.value)
  } 

  const handleOnSubmit = (event) => { 
    event.preventDefault(); 
    dispatch(getPokemon(name))
  }

  return (
    <div> 
        <h1>Bienvenido al home!</h1> 
        <h2>Busca tu pokemon favorito</h2> 
        <form onSubmit={(e) => handleOnSubmit(e)}>  
          <label htmlFor='name'>Pokemon: </label> 
          <input 
           type='text' 
           autoComplete='off' 
           value={name} 
           onChange={(e) => handleOnChange(e)} />  
           <button type='submit'>BUSCAR</button>
        </form>      
    </div>
  )
}
