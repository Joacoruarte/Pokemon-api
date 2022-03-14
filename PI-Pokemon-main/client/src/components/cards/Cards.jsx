import React from 'react'
import Card from './Card' 

export default function Cards({pokemon}) {
  return (
    <div id='container'> 
        {pokemon.map((poke)=> 
            <Card  
            key={poke.id}  
            img={poke.img}  
            id={poke.id}
            name={poke.name}
            type={poke.type}
            />
        )}
    </div>
  )
}
