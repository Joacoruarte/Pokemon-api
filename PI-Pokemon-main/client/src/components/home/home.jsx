import React ,{ useEffect } from 'react' // useEffect 
import { useDispatch , useSelector} from 'react-redux';  //useSelector
import { Link } from 'react-router-dom';
import { getAllPokemons , orders , pokemonName , getTypes , filterType} from '../../actions';    
import Cards from '../cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Spin from '../spin/spin';  //Spin de carga  


export default function Home() { 

  //ESTADOS LOCALES 
  const [name , setName] = React.useState('') 
  const [alfa , setAlfa] = React.useState('') 
  const [count, setCount] = React.useState(1) 
  const [currentPage, setCurrentPage] = React.useState(0)  
  
  //ESTADOS && ACTIONS DE REDUX
  const dispatch = useDispatch() 
  let state = useSelector(state => state.allPokemons)  
  const type  = useSelector(state => state.pokemonTypes)      

  //CUANDO SE MONTA EL COMPONENTE SE TRAE LOS TIPOS
  useEffect(() => { 
    dispatch(getTypes())
  }, [dispatch])
  
  //CUANDO SE MONTA EL COMPONENTE SE TRAE LOS POKEMONS 
  useEffect(() => {   
    state.length === 0 && dispatch(getAllPokemons()) 
  },[state.length ,dispatch])   
  
  //FILTRADO DE PAGINACION
  const filterPokemons = () => { 
    return state.slice(currentPage , currentPage + 12)
  } 

  //FUNCION PARA QUE AUMENTE EN 1 MI PAGINA Y MUTE MI STATE
  const nextPage = () => { 
    if(filterPokemons().length === 12){ 
      if(currentPage < state.length - 12){  
        if(count < 4) setCount( count + 1)
        setCurrentPage( currentPage + 12) 
      }      
    }     
  } 
 
  //FUNCION PARA QUE RESTE EN 1 MI PAGINA Y MUTE MI STATE
  const prevPage = () => {     
      if(count > 1) setCount( count -1)
      if(currentPage > 0) setCurrentPage( currentPage - 12) 
    }

// HANDLER DEL FORM DE TIPO SUBMIT  
function handleSubmit(event){ 
  event.preventDefault() 
  if(name.length === 0){ 
    return alert('No puedes buscar un pokemon si el input esta vacio')
  } 
  dispatch(pokemonName(name))  
  setCurrentPage(0) 
  setCount(1)
} 

// HANDLER INPUT DE BUSQUEDA  
const handleInputChange = (event) =>{   
  setName(event.target.value)
}

// HANDLER DEL SELECT DE ORDERS
  function handleOnChange (event) {  
    dispatch(orders(event.target.value))   
    setAlfa(event.target.value) 
    setCurrentPage(0) 
    setCount(1) 
  }
  
// HANDLER DEL SELECT DE TYPES  
  function handleOnfilter (event) {  
    dispatch(filterType(event.target.value))   
    setAlfa(event.target.value) 
    setCurrentPage(0) 
    setCount(1) 
    console.log(alfa)
  } 

  return (
    <div> 
      <div className='pokemon'> 
      </div> 
      <div> 
        <SearchBar 
         search={handleSubmit}  
         input={handleInputChange}  
         name={name}/>
      </div>
      <div className='buttons'> 
        <button id='anterior' onClick={prevPage}> 
          anterior
        </button> 

        <span>{count}/4</span> 

        <button id='siguiente' onClick={nextPage}> 
          siguiente
        </button> 

        <select id='order' defaultValue='order' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='order'>Order</option>
          <option value='az'>A-Z</option> 
          <option value='za'>Z-A</option>  
        </select> 
       
        <select id='apidb' defaultValue='order' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='order'>API / DB</option>
          <option value='api'>Api</option> 
          <option value='db'>DB</option>  
        </select> 


        <select id='fuerza' defaultValue='Strong' onChange={(e) => handleOnChange(e)}> 
          <option disabled value='Strong'>Strong</option>
          <option value='low'>Low-attack</option> 
          <option value='hight'>Hight-attact</option>  
        </select>   
       
        <select id='types' defaultValue='Tipos' onChange={(e) => handleOnfilter(e)}> 
          <option disabled value='Tipos'>Types</option> 
          <option value='all'>All</option>
          {type && type.map(e => ( 
            <option key={e.id} value={e.name}>{e.name}</option>
          ))} 
        </select>   

        <button id='refresh' onClick={() => dispatch(getAllPokemons())}>Recargar</button> 
        <button id='crearpk'><Link to={`/create`}>Crea tu propio pokemon</Link></button> 
      </div> 
      <div> 
        {state.length === 0 ? <Spin />  :  <Cards pokemon={filterPokemons()}/>}
      </div>        

    </div>
  )
}