import React, {useEffect , useState}  from 'react' 

export default function Spin() {

  const [cargando, setCargando] = useState('Cargando pokemons...')
  useEffect(() => { 
    const cambiarpoball = async() =>{ 
      setTimeout(() => {
        setCargando('No se encontro pokemons')
      }, 5000);
    }  
    return cambiarpoball()
  }, [])
  
  return (
    <div className='spinDiv'> 
        <p>{cargando}</p> 
        <div className="lds-facebook"> 
          <div></div> 
          <div></div> 
          <div></div> 
        </div>
    </div>
  )
}
