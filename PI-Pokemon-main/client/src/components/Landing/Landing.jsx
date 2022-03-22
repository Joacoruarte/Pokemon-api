import React from 'react' 
import { Link } from 'react-router-dom' 


export default function Landing() {
  return (  
    <div id='fondo'> 
      <div id='img'> 
      <h2>Hi, Welcome to my Poke Api!</h2>  
      <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='pikachu img'/>
        <div className='containers'> 
          <h1 className='welcome'>Find your favorite pokemon!</h1>  
          <Link id='link' to={'/home'}> 
            <div> 
              <button className='home'>Ingresar</button>
            </div>      
          </Link> 
        </div>     
      </div>      
    </div>

  )
}
