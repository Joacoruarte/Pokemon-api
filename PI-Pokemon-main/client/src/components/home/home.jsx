import React ,{ useEffect } from 'react' // useEffect 
import { useDispatch , useSelector} from 'react-redux';  //useSelector
import { getAllPokemons , filterAZ , pokemonName , refreshPokemons , getTypes} from '../../actions';    
import Cards from '../cards/Cards';
import Spin from '../spin/spin';  //Spin de carga
import './home.css'

export default function Home() { 

  const [alfa , setAlfa] = React.useState('') 
  const [name , setName] = React.useState('') 
  const [count, setCount] = React.useState(1) 
  const [currentPage, setCurrentPage] = React.useState(0) 
  const dispatch = useDispatch() 
  const state = useSelector(state => state.allPokemons)  
  const type  = useSelector(state => state.pokemonTypes)   


  useEffect(() => { 
    dispatch(getTypes())
  }, [dispatch])
  
  useEffect(() => { 
    if(state.length > 0){ 
      return 1
    }else { 
      dispatch(getAllPokemons())
    }
  },[dispatch])   
  
  const filterPokemons = () => { 
    return state.slice(currentPage , currentPage + 12)
  } 

  const nextPage = () => { 
    if(filterPokemons().length === 12){ 
      if(currentPage < state.length - 12){  
        if(count < 4) setCount( count + 1)
        setCurrentPage( currentPage + Math.ceil(state.length / 3.5)) 
      }      
    }     
  }
  const prevPage = () => {     
      if(count > 1) setCount( count -1)
      if(currentPage > 0) setCurrentPage( currentPage - Math.ceil(state.length / 3.5)) 
    }

  const handleInputChange = (event) =>{  
    setName(event.target.value)
  }

  function handleSubmit(event){ 
    event.preventDefault() 
    dispatch(pokemonName(name))
  } 

  function handleOnChange (event) {  
    dispatch(filterAZ(event.target.value))   
    setAlfa(event.target.value)
  }
  
  return (
    <div> 
      <div className='logic'> 
        <h1>Bienvenido al home!</h1> 
        <h2>Busca tu pokemon favorito</h2> 
        <form onSubmit={(e) => handleSubmit(e)}>  
          <label htmlFor='name'>Pokemon: </label> 
          <input 
           type='text' 
           autoComplete='off' 
           value={name} 
           onChange={(e) => handleInputChange(e)}
            />  
           <button type='submit'>BUSCAR</button>
        </form> 
        <button onClick={prevPage}> 
            Anterior
        </button> 

        <span>{count}/4</span> 

        <button onClick={nextPage}> 
            Siguiente
        </button> 

        <select defaultValue='order' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='order'>Order</option>
          <option value='az'>A-Z</option> 
          <option value='za'>Z-A</option>  
        </select> 


        <select defaultValue='Strong' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='Strong'>Strong</option>
          <option value='low'>Low-attack</option> 
          <option value='hight'>Hight-attact</option>  
        </select>   
       
        <select defaultValue='Tipos' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='Tipos'>Types</option>
          {type && type.map(e => ( 
            <option key={e.id} value={e.name}>{e.name}</option>
          ))} 
        </select>   

        <button onClick={() => dispatch(refreshPokemons())}>Refresh Pokemons</button>
      </div>  
      <div> 
        {state.length === 0 ? <Spin />  :  <Cards pokemon={filterPokemons()}/>}
      </div>
    </div>
  )
}