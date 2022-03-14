import React from 'react'
export default function Spin() {
  return (
    <div className='spinDiv'> 
        <p>Cargando pokemons...</p> 
        <div className="lds-facebook"> 
          <div></div> 
          <div></div> 
          <div></div> 
        </div>
    </div>
  )
}
