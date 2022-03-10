import React from 'react'
import Card from './Card' 
import style from './Cards.module.css'

export default function Cards({pokemon}) {
  return (
    <div id={style.container}> 
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
