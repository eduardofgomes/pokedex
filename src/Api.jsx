export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.error("Search pokemon: ", error)
    }
}

export const getPokemon = async (limit = 50, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}/${pokemon}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.error("Search pokemon: ", error)
    }
}