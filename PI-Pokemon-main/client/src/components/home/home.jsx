import React ,{ useEffect } from 'react' // useEffect 
import { useDispatch , useSelector} from 'react-redux';  //useSelector
import { Link } from 'react-router-dom';
import { getAllPokemons , orders , setLoading , pokemonName , getTypes , filterType} from '../../actions';    
import Cards from '../cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Spin from '../spin/spin';  //Spin de carga  


export default function Home() { 

  //ESTADOS LOCALES 
  const [name , setName] = React.useState('') 
  const [alfa , setAlfa] = React.useState('') 
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage] = React.useState(12)   
  
  //ESTADOS && ACTIONS DE REDUX
  const dispatch = useDispatch() 
  let state = useSelector(state => state.allPokemons)  
  const type  = useSelector(state => state.pokemonTypes)    
  let loading = useSelector(state => state.loading)   

  //CUANDO SE MONTA EL COMPONENTE SE TRAE LOS TIPOS
  useEffect(() => { 
    dispatch(getTypes())
  }, [dispatch])
  
  //CUANDO SE MONTA EL COMPONENTE SE TRAE LOS POKEMONS 
  useEffect(() => {   
    dispatch(getAllPokemons()) 
  },[dispatch])   
  
  //FILTRADO DE PAGINACION 

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const filterPokemons = state.slice(indexOfFirstPage , indexOfLastPage)  

  //Indices de pagina automatico
  const pageNumbers = []; 
    
  for(let i = 1; i <= Math.ceil(state.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  //FUNCION PARA QUE AUMENTE EN 1 MI PAGINA Y MUTE MI STATE
  const nextPage = () => { 
    if(currentPage < pageNumbers.length){ 
      setCurrentPage(currentPage + 1)
    }
  } 
 
  //FUNCION PARA QUE RESTE EN 1 MI PAGINA Y MUTE MI STATE
  const prevPage = () => {     
    if(currentPage > 1){ 
      setCurrentPage(currentPage - 1)
    }
  }

// HANDLER DEL FORM DE TIPO SUBMIT  
function handleSubmit(event){ 
  event.preventDefault() 
  if(name.length === 0){ 
    return alert('No puedes buscar un pokemon si el input esta vacio')
  } 
  dispatch(pokemonName(name))  
} 

// HANDLER INPUT DE BUSQUEDA  
const handleInputChange = (event) =>{   
  setName(event.target.value)
}

// HANDLER DEL SELECT DE ORDERS
  function handleOnChange (event) {  
    dispatch(orders(event.target.value))   
    setAlfa(event.target.value) 
    setCurrentPage(1) 
  }
  
// HANDLER DEL SELECT DE TYPES  
  function handleOnfilter (event) {  
    dispatch(filterType(event.target.value))   
    setAlfa(event.target.value)  
    setCurrentPage(1)
    console.log(alfa)
  } 

  function handlerLoading(){   
    dispatch(setLoading('loading'))
    dispatch(getAllPokemons()) 
    }
  if(loading){  
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
            ⬅
          </button> 
  
          <span>{state.length === 0 ? 0 : currentPage} / {state.length === 0 ? '-' : pageNumbers.length}</span> 
  
          <button id='siguiente' onClick={nextPage}> 
            ➡
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
  
          <button id='refresh' onClick={handlerLoading}>Recargar</button> 
          <button id='aboutme'><Link to={`/about`}>About</Link></button>
          <button id='crearpk'><Link to={`/create`}>Crea tu propio pokemon</Link></button> 
        </div>  
            <div> 
              <Spin/>
            </div>
       </div> 
    )
  }else{ 
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
            ⬅
          </button> 
  
          <span>{state.length === 0 ? 0 : currentPage} / {state.length === 0 ? '-' : pageNumbers.length}</span> 
  
          <button id='siguiente' onClick={nextPage}> 
            ➡
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
          <button id='aboutme'><Link to={`/about`}>About</Link></button>
          <button id='crearpk'><Link to={`/create`}>Crea tu propio pokemon</Link></button> 
        </div> 
        <div> 
          {state.length === 0 ? <Spin />  :  <Cards pokemon={filterPokemons}/>}
        </div>        
      </div>
    )

  }
}