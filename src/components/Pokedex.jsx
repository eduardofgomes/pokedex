import React from "react"
import Pokemon from "./Pokemon"

const Pokedex = (props) => {
    const {pokemons, loading} = props
    return (
        <>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <div>Pages</div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : 
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default Pokedex