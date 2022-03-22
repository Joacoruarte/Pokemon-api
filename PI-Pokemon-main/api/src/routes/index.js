const { Router } = require('express');  

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers

router.use('/pokemons' , require('./pokemons')) 
router.use('/pokemons/delete' , require('./deletePokemon'))
router.use('/pokemons' , require('./pokemonsId')) 
router.use('/types' , require('./tipos'))
router.use('/pokemons' , require('./pokemonPost'))

module.exports = router;
