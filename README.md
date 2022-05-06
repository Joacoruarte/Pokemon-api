# Pokemon-api 

<p align="center">
  <img height="500" src="https://user-images.githubusercontent.com/93412370/167063027-d70a1739-b354-46ad-af65-b80ef108a5dc.png" />
</p>
<p align="center">
  <img height="500" src="https://user-images.githubusercontent.com/93412370/167062929-561d2f1e-ba32-4fcf-bd1e-2a2209ed4348.jpeg">
 />
</p>
<p align="center">
  <img height="500" src="https://user-images.githubusercontent.com/93412370/167063088-2d9e09f0-6fcb-438c-97f1-52d3244d9d79.png" />
</p>

# Proyecto (Single Page Application) Videogame App #

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize
- [ ] Postgres

__IMPORTANTE__: No se uso ninguna librería externa para aplicar estilos a la aplicación.  Solo  CSS  puro.

## Descripción 
Esta es una aplicación en la cual se puedan ver distintos pokemones junto con una informacion relevante de los mismos utilizando una api externa llamada [Pokeapi]
apartir de ella poder, entre otras cosas: 

  - Buscar pokemons
  - Filtrarlos / Ordenarlos
  - Agregar nuevos pokemons propios por medio de un formulario
  - Ver el detalle individual de cada uno

#### Frontend

__Pagina inicial__: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener
- [ ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
- [ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /pokemons` y deberá mostrar su:
  - Imagen
  - Nombre
  - Tipos (Electrico, Fuego, Agua, etc)
- [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
- [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.

__Ruta de detalle de Pokemon__: debe contener
- [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
- [ ] Número de Pokemon (id)
- [ ] Estadísticas (vida, fuerza, defensa, velocidad)
- [ ] Altura y peso

__Ruta de creación__: debe contener
- [ ] Un formulario __controlado con JavaScript__ con los campos mencionados en el detalle del Pokemon
- [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
- [ ] Botón/Opción para crear un nuevo Pokemon

- Formulario de HTML validado con JavaScript.

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] Pokemon con las siguientes propiedades:
  - ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
  - Nombre *
  - Vida
  - Fuerza
  - Defensa
  - Velocidad
  - Altura
  - Peso
- [ ] Tipo con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un pokemon puede pertenecer a más de un tipo y, a su vez, un tipo puede incluir a muchos pokemons.

#### Backend

- [ ] __GET /pokemons__:
  - Devuelve un listado de los pokemons desde pokeapi.
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /pokemons/{idPokemon}__:
  - Devuelve el detalle de un pokemon en particular o en base de datos creado
  - Debe traer solo los datos pedidos en la ruta de detalle de pokemon
- [ ] __GET /pokemons?name="..."__:
  - Devuelve el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
- [ ] __POST /pokemons__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
  - Crea un pokemon en la base de datos
- [ ] __GET /types__:
  - Devuelve todos los tipos de pokemons posibles
  - En una primera instancia se traen desde pokeapi y se guardan luego en su propia base de datos y luego ya utilizarlos desde allí

## Comenzando

 1. Forkear el repositorio para tener una copia del mismo en sus cuentas
 2. Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `pokemon`

El contenido de `client` fue creado usando: Create React App.

Una vez abierto el proyecto es necesario instalar dependencias y iniciarlo: 

- Abrir en terminall integrado la carpeta `client`  y escribir `npm install` , esperar a que se instalen las dependencias y luego escribir `npm start`
- Abrir en terminall integrado la carpeta `api`  y escribir `npm install` , esperar a que se instalen las dependencias y luego escribir `npm start`
- Todo listo !!
