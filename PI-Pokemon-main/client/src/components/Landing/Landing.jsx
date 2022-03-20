import React from 'react' 
import { Link } from 'react-router-dom' 


export default function Landing() {
  return (  
    <div id='fondo'> 
      <div id='img'>  
      <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='pikachu img'/>
        <div className='containers'> 
          <h1 className='welcome'>Welcome to the Pokemon Api !!</h1>  
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
