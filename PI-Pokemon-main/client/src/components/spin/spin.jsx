import React, { useEffect } from 'react' 

export default function Spin() {
 
  const [text, setText] = React.useState('Cargando pokemons...')  
  useEffect(() => { 
    const timer = setTimeout(() => {
      setText('No se encontro pokemons...')
    }, 8000);  
    return timer
  }, [])
  
  
  return (
    <div className='spinDiv'> 
        <p value={text}>{text}</p> 
        <div className="lds-facebook"> 
          <div></div> 
          <div></div> 
          <div></div> 
        </div>
    </div>
  )
}
