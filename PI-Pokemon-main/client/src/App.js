import './App.css';
import { Route } from "react-router-dom"; 
import Landing from './components/Landing/Landing'; 
import home from './components/home/home'; 
import pokemon from './components/pokemonDetail/pokemon' 
import newpk from './components/newPokemon/newpk'

function App() {
  return (
    <> 
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/home' component={home} /> 
      <Route exact path='/detail/:id' component={pokemon} /> 
      <Route exact path='/create' component={newpk} /> 
    </>
  );
}

export default App;
