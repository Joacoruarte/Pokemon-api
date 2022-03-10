import React from 'react' 
import { Link } from 'react-router-dom'
import './inicio.css'

export default function inicio() {
  return (
    <div className='containers'> 
      <h1 className='welcome'>Welcome to the Pokemon Api !!</h1>   
      <button className='home'><Link to={'/home'}>Ingresar</Link></button> 
    </div> 
    
  )
}
