import React from 'react'

const SearchBar = ({search , input , name}) => { 
  return (
        <div id='nav'>
            <div className='logic'>
                <div className='titulo'>
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
        </div>
    )
}

export default SearchBar