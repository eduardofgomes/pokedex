import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props
    return (
        <>
            {pokemon.name}
        </>
    )
}

export default Pokemon