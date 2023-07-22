import React, {useContext} from 'react';
import FavoriteContext from "../contexts/FavoriteContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <div className="pokemon-card card-color">
            <div className="pokemon-image-container card-color">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body card-color">
                <div className="card-top card-color">
                    <h3 className="text-white card-color"> {pokemon.name} </h3>
                    <div className="text-white card-color"> {pokemon.id} </div>
                </div>
                <div className="card-bottom card-color">
                    <div className="pokemon-type card-color">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text text-white">
                                    {type.type.name}
                                </div>
                            )
                            })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                    <button onClick={() => setModalIsOpen(true)} key={pokemon.id} />
                </div>
            </div>
        </div>
    )
}

export default Pokemon