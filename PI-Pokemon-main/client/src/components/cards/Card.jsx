import React from 'react' 
import style from './Card.module.css' 
import { Link } from 'react-router-dom'

export default function Card(props) {
    const { img , name  , type , id} = props
  return (
    <div key={id} className={style.card}> 
        <img src={img} alt='cargando..' className={style.img}/> 
        <Link to={`/detail/${id}`}><h2>{name}</h2> </Link>
        <span>{type}</span>
    </div>
  )
}
