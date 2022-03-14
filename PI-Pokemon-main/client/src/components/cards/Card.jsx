import React from 'react' 
import { Link } from 'react-router-dom'

export default function Card(props) {
    const { img , name  , type , id} = props
  return ( 
    <Link className='linkCard' key={id} to={`/detail/${id}`}> 
      <div className='card'> 
          <img src={img} alt='cargando..' className='img'/> 
          <h2>{name}</h2>
          <div className='type'> 
            {type && type.map(e => ( 
              <p key={e}>{e}</p>
            ))}
          </div>
      </div>    
    </Link>

  )
}
