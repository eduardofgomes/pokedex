import React, { useState } from 'react'
import {searchPokemon} from '../Api.jsx'

const Searchbar = () => {
    const [search, setSearch] = useState("Charizard")
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    return (
        <>
            <div className="searchbar-container">
                <div className="searchbar">
                    <input placeholder='search pokemon' onChange={onChangeHandler} />
                </div>
                <div className="searchbar-btn">
                    <button onClick={onButtonClickHandler}>Search</button>
                </div>
                {pokemon ? (
                    <div>
                        <div>{pokemon.name}</div>
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Searchbar