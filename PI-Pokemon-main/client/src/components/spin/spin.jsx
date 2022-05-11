import React, {useEffect , useState}  from 'react' 

export default function Spin() {

  return (
    <div className='spinDiv'> 
        <p> Cargando...</p> 
        <div className="lds-facebook"> 
          <div></div> 
          <div></div> 
          <div></div> 
        </div>
    </div>
  )
}
