import './App.css';
import { Route } from "react-router-dom"; 
import Landing from './components/Landing/Landing'; 
import home from './components/home/home'; 
import pokemon from './components/pokemonDetail/pokemon' 
import newpk from './components/newPokemon/newpk' 
import About from './components/about/About';

function App() {
  return (
    <> 
      <Route exact path='/' component={Landing} /> 
      <Route exact path='/home' component={home} /> 
      <Route exact path='/detail/:id' component={pokemon} /> 
      <Route exact path='/create' component={newpk} />  
      <Route exact path='/about' component={About} />
    </>
  );
}

export default App;
