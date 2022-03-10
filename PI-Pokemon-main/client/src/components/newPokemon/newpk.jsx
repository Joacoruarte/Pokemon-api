import React  from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getTypes , postPokemon } from '../../actions'

export default function Newpk() {

  // const state = useSelector(state => state.pokemonTypes)
  // const dispatch = useDispatch()   
  // const [pokemon , setPokemon ] = React.useState({ 
  //   name: '', 
  //   hp: 0, 
  //   attack: 0, 
  //   defense: 0, 
  //   speed: 0, 
  //   height: 0, 
  //   weight: 0, 
  //   type: '' 
  // })

  // const handleOnChange = (event) => { 
  //   setPokemon(event.target.value)
  // } 

  // const handleOnSubmit = (event) => { 
  //   event.preventDefault(); 
  //   dispatch(postPokemon(pokemon))
  // } 


  // useEffect(() => { 
  //   dispatch(getTypes())
  // }, [dispatch])
  // console.log(state)
  return (
    <div> 
      <form style={{display: 'flex' , flexDirection: 'column' , width: '80%' , margin: '0px auto' , gap: '0.5rem'}}> 
        <h1>Add Pokemon</h1> 
        <label>Nombre:</label> 
        <input placeholder='Ingrese el nombre del pokemon' />  
        <label>Vida:</label>
        <input placeholder='vida..' /> 
        <label>Ataque:</label>
        <input placeholder='ataque..' /> 
        <label>Defensa:</label>
        <input placeholder='defensa..' /> 
        <label>Velocidad:</label>
        <input placeholder='velocidad..' /> 
        <label>Peso:</label>
        <input placeholder='Peso..' /> 
        <label>Altura:</label>
        <input placeholder='altura..' />   
        <label>Tipos</label>  

        <select> 
          {/* {state && state.map(e=> ( 
                <> 
                  <option value={e.name}>{e.name}</option>
                </>
            ))}          */}
        </select>
  
     
      </form>
    </div>
  )
}
