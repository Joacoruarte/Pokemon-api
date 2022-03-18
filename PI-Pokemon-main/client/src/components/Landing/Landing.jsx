import React from 'react' 
import { Link } from 'react-router-dom' 


export default function Landing() {
  return (  
    <div id='fondo'> 
      <div id='img'> 
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
