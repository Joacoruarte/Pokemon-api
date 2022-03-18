import React from 'react'

const SearchBar = ({search , input , name}) => { 
  return (
        <>
            <div className='logic'>
                <div className='titulo'>
                    <h1>Bienvenido al home!</h1>
                    <h2>Buscá tu pokemón favorito:</h2>
                </div>
                <form className='form' onSubmit={(e) => search(e)}>
                    <input
                        type='text'
                        autoComplete='off'
                        value={name}
                        onChange={(e) => input(e)}
                    />
                    <button type='submit'>BUSCAR</button>
                </form>
            </div>
        </>
    )
}

export default SearchBar