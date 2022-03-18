import React ,{ useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes , postPokemon, refreshPokemons } from '../../actions' 
import {Link, useHistory} from 'react-router-dom' 


export function validate(pokemon){ 
  let errors = {} 
  console.log(errors) 
  //NOMBRE
  if(!pokemon.name){ 
    errors.name = 'El nombre es requerido'
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
  }else if(pokemon.attack < 10){ 
    errors.attack = 'El ataque tiene que ser como minimo 10'
  }

  //DEFENSA
  if(!pokemon.defense){ 
    errors.defense = 'La defensa es requerida'
  }else if(!typeof pokemon.defense === 'number'){ 
    errors.defense = 'El valor debe ser un numero'
  }else if(pokemon.defense < 10){ 
    errors.defense = 'La defensa tiene que ser como minimo 10'
  }

  //VELOCIDAD
  if(!pokemon.speed){ 
    errors.speed = 'La velocidad es requerida'
  }else if(!typeof pokemon.speed === 'number'){ 
    errors.speed = 'El valor debe ser un numero'
  }else if(pokemon.speed < 10){ 
    errors.speed = 'La velocidad tiene que ser como minimo 10'
  } 

  //PESO
  if(!pokemon.height){ 
    errors.height = 'La altura es requerida'
  }else if(!typeof pokemon.height === 'number'){ 
    errors.height = 'El valor debe ser un numero'
  }else if(pokemon.height < 20){ 
    errors.height = 'La altura tiene que ser 20 o superior'
  } 

  //ALTURA 
  if(!pokemon.weight){ 
    errors.weight = 'El peso es requerido'
  }else if(!typeof pokemon.weight === 'number'){ 
    errors.weight = 'El valor debe ser un numero'
  }else if(pokemon.weight < 30){ 
    errors.weight = 'El peso tiene que ser como minimo 30'
  }  

  return errors
}

export default function Newpk() {

  const state = useSelector(state => state.pokemonTypes)
  const dispatch = useDispatch()   
  const history = useHistory()
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
    if(Object.keys(errors).length > 0){ 
      alert('Debes rellenar todos los campos')
    }else{ 
      if(select.length === 0){ 
        return  alert('Tienes que agregar un tipo antes crear un pokemon')
      }else{ 
        if(select.length > 0) select.map(e => pokemon.type.push(e))  
        if(pokemon.hp !== 0 || pokemon.attack !== 0 || pokemon.defense !== 0 || pokemon.speed !== 0 || pokemon.height !== 0 || pokemon.weight !== 0){ 
          dispatch(postPokemon(pokemon)) 
          dispatch(getAllPokemons()) 
          alert('Pokemon creado correctamente!') 
          setTimeout(() => {
            history.push('/home')
          }, 2000);        
        }else{ 
          alert('Debes rellenar todos los campos antes de enviar')
        }        
      }
    }
  } 

  useEffect(() => { 
    dispatch(getTypes()) 
  }, [dispatch])
  // console.log(state)
  return (
    <div className='divForm'> 
      <button className='button'><Link to={`/home`}>Go to home</Link></button> 
      <form className='forms' onSubmit={(e) => handleOnSubmit(e)}> 
        <h1>Add Pokemon</h1> 

        <label>Nombre:</label> 
        <input type='text' placeholder='Ingrese el nombre del pokemon' 
         onChange={handleInputChange} name='name' value={pokemon.name} /> 
        
        <label>Imagen:</label> 
        <input type='text' placeholder='Imagen..' 
         onChange={handleInputChange} name='img' value={pokemon.img} />  

        <label>Vida:</label>
        <input placeholder='vida..' name='hp' autoComplete='off' onChange={handleInputChange} value={pokemon.hp} /> 

        <label>Ataque:</label>
        <input placeholder='ataque..' name='attack' onChange={handleInputChange} value={pokemon.attack} /> 
      
        <label>Defensa:</label>
        <input placeholder='defensa..' name='defense' onChange={handleInputChange} value={pokemon.defense} /> 
     
        <label>Velocidad:</label>
        <input placeholder='velocidad..' name='speed' onChange={handleInputChange} value={pokemon.speed} /> 
      
        <label>Peso:</label>
        <input placeholder='Peso..' name='weight' onChange={handleInputChange} value={pokemon.weight} /> 
    
        <label>Altura:</label>
        <input placeholder='altura..' name='height' onChange={handleInputChange} value={pokemon.height} />   
       

        <label>Tipos</label> 

        <div className='typess'> 
          {state && state.map((e) => ( 
            <label key={e.id} htmlFor={e.name}><input 
            type='checkbox'  
            id={e.name}
            name={e.name} 
            value={e.name} 
            onChange={handleSelectChange}  
            />{e.name}</label>
          ))}        
        </div>


        <div id='button'> 
          <button type='submit' >Crear pokemon</button>          
        </div>  
 
      </form> 
      <div className='errorDiv'>  
        <ul> 
        <h1>Errores</h1>  
        {errors.name && <li>-{errors.name}</li>}
        {errors.hp && <li>-{errors.hp}</li>}
        {errors.attack && <li>-{errors.attack}</li>}
        {errors.defense && <li>-{errors.defense}</li>}
        {errors.weight && <li>-{errors.weight}</li>}
        {errors.speed && <li>-{errors.speed}</li>}
        {errors.height && <li>-{errors.height}</li>}
        {errors.type && <li>-{errors.type}</li>} 
        {select.length === 0 && <li>-Debes seleccionar un tipo como minimo</li>}          
        </ul>
      </div> 
    </div>
  )
}
