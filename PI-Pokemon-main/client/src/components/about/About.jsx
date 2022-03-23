import React from 'react' 
import { SiLinkedin } from 'react-icons/si' 
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom'

function About() {
  return (  
     <> 
     <div id='navbar'> 
        <h1>About me</h1>
     </div> 
     <button className='btn'><Link to={`/home`}>Go to home</Link></button>
        <div id='about'> 
            <div id='pokemonImg' >  
                <div className='imgs'> 
                    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png' alt='Cargando'/>    
                </div>
                <div className='content'> 
                    <h1>-SPA Created by Joaquin ruarte-</h1> 
                    <div> 
                        <a href='https://www.linkedin.com/in/joaquin-ruarte-67577b210/'><SiLinkedin /></a>
                        <a href='https://github.com/Joacoruarte'><GoMarkGithub /></a>
                    </div>            
                </div> 
            </div>        
        </div>     
     </> 


  )
}

export default About