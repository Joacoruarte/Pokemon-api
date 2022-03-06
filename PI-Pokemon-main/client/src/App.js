import './App.css';
import { Route } from "react-router-dom"; 
import inicio from './components/inicio/inicio'; 
import home from './components/home/home'; 
import pokemon from './components/pokemonDetail/pokemon' 
import newpk from './components/newPokemon/newpk'

function App() {
  return (
    <> 
      <Route exact path='/' component={inicio} /> 
      <Route exact path='/home' component={home} /> 
      <Route exact path='/detail' component={pokemon} /> 
      <Route exact path='/create' component={newpk} /> 
    </>
  );
}

export default App;
