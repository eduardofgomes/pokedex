import React, { useContext } from 'react';

const FavoriteContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemon: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider

export default FavoriteContext