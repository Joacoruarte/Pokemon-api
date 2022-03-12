import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes , postPokemon, refreshPokemons } from '../../actions' 
import {Link} from 'react-router-dom' 
import style from './newpk.module.css'


export function validate(pokemon){ 
  let errors = {} 
  console.log(errors) 
  //NOMBRE
  if(!pokemon.name){ 
    errors.name = 'El nombre is required'
  }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(pokemon.name)){ 
    errors.name = 'El nombre no debe contener numeros'
  } 
  
  //VIDA
  if(!pokemon.hp){ 
    errors.hp = 'La vida es requerida'
  }else if(!typeof pokemon.hp === 'number'){ 
    errors.hp = 'El valor debe ser un numero'
  }else if(pokemon.hp < 10){ 
    errors.hp = 'La vida tiene que ser como minimo 10'
  }

  //ATAQUE
  if(!pokemon.attack){ 
    errors.attack = 'La fuerza de ataque es requerida'
  }else if(!typeof pokemon.attack === 'number'){ 
    errors.attack = 'El valor debe ser un numero'
  }

  //DEFENSA
  if(!pokemon.defense){ 
    errors.defense = 'La defensa es requerida'
  }else if(!typeof pokemon.defense === 'number'){ 
    errors.defense = 'El valor debe ser un numero'
  }

  //VELOCIDAD
  if(!pokemon.speed){ 
    errors.speed = 'La velocidad es requerida'
  }else if(!typeof pokemon.speed === 'number'){ 
    errors.speed = 'El valor debe ser un numero'
  } 

  //PESO
  if(!pokemon.height){ 
    errors.height = 'El peso es requerido'
  }else if(!typeof pokemon.height === 'number'){ 
    errors.height = 'El valor debe ser un numero'
  } 

  //ALTURA 
  if(!pokemon.weight){ 
    errors.weight = 'La altura es requerida'
  }else if(!typeof pokemon.weight === 'number'){ 
    errors.weight = 'El valor debe ser un numero'
  } 

  //TIPOS 
  // if(!pokemon.type){ 
  //   errors.type = '1 tipo al menos es requerido'
  // }

  return errors
}

export default function Newpk() {

  const state = useSelector(state => state.pokemonTypes)
  const dispatch = useDispatch()   
  const [select, setSelect] = React.useState([])
  const [errors, setErrors] = React.useState({})
  const [pokemon , setPokemon ] = React.useState({ 
    name: '', 
    img: '',
    hp: 0, 
    attack: 0, 
    defense: 0, 
    speed: 0, 
    height: 0, 
    weight: 0, 
    type: [], 
  })

  const handleInputChange = function (e) {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    });  
    setErrors(validate({ 
      ...pokemon, 
      [e.target.name]: e.target.value
    }))
  } 
  // [] false = true ..> ['rock'] - ['rock']
  const handleSelectChange = (event) => {  
    if(!select.find(e => e === event.target.value)){ 
      setSelect([ 
      ...select, 
      event.target.value
    ]) 
    }else{ 
      setSelect(select.filter(e => e !== event.target.value))
    }  
  }

  const handleOnSubmit = (event) => { 
    event.preventDefault();  
    console.log(pokemon)  
    if(Object.keys(errors).length > 0){ 
      alert('Debes rellenar todos los campos')
    }else{
      if(select.length > 0) select.map(e => pokemon.type.push(e)) 
      dispatch(postPokemon(pokemon)) 
      dispatch(refreshPokemons())
      alert('Pokemon creado correctamente!')
    }
  } 


  useEffect(() => { 
    dispatch(getTypes())
  }, [dispatch])
  // console.log(state)
  return (
    <div className={style.divForm}> 
      <button className={style.button}><Link to={`/home`}>Go to home</Link></button> 
      <form className={style.form} onSubmit={(e) => handleOnSubmit(e)}> 
        <h1>Add Pokemon</h1> 

        <label>Nombre:</label> 
        <input type='text' placeholder='Ingrese el nombre del pokemon' 
         onChange={handleInputChange} name='name' value={pokemon.name} /> 
         {errors.name && <p>{errors.name}</p>}  
        
        <label>Imagen:</label> 
        <input type='text' placeholder='Imagen..' 
         onChange={handleInputChange} name='img' value={pokemon.img} />  

        <label>Vida:</label>
        <input placeholder='vida..' name='hp' autoComplete='off' onChange={handleInputChange} value={pokemon.hp} /> 
        {errors.hp && <p>{errors.hp}</p>}

        <label>Ataque:</label>
        <input placeholder='ataque..' name='attack' onChange={handleInputChange} value={pokemon.attack} /> 
        {errors.attack && <p>{errors.attack}</p>}

        <label>Defensa:</label>
        <input placeholder='defensa..' name='defense' onChange={handleInputChange} value={pokemon.defense} /> 
        {errors.defense && <p>{errors.defense}</p>}

        <label>Velocidad:</label>
        <input placeholder='velocidad..' name='speed' onChange={handleInputChange} value={pokemon.speed} /> 
        {errors.speed && <p>{errors.speed}</p>}

        <label>Peso:</label>
        <input placeholder='Peso..' name='weight' onChange={handleInputChange} value={pokemon.weight} /> 
        {errors.weight && <p>{errors.weight}</p>}

        <label>Altura:</label>
        <input placeholder='altura..' name='height' onChange={handleInputChange} value={pokemon.height} />   
        {errors.height && <p>{errors.height}</p>} 

        <label>Tipos</label> 

    
        {state && state.map((e) => ( 
          <label key={e.id} htmlFor={e.name}><input 
          type='checkbox'  
          id={e.name}
          name={e.name} 
          value={e.name} 
          onChange={handleSelectChange}  
          />{e.name}</label>
        ))}

        {errors.type && <p>{errors.type}</p>} 

        <button type='submit'>Crear pokemon</button>
      </form> 
      {/* <div className={style.errorDiv}> 
        <ul> 
        {errors.name && <li>{errors.name}</li>}
        {errors.hp && <li>{errors.hp}</li>}
        {errors.attack && <li>{errors.attack}</li>}
        {errors.defense && <li>{errors.defense}</li>}
        {errors.speed && <li>{errors.speed}</li>}
        {errors.height && <li>{errors.height}</li>}
        {errors.weight && <li>{errors.weight}</li>}
        {errors.type && <li>{errors.type}</li>}          
        </ul>
      </div> */}
    </div>
  )
}
